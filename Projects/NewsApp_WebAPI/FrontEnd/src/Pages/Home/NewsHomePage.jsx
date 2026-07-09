import { NewsCard } from '../../components/NewsCard/NewsCard.jsx'
import './NewsHomePage.css'
import {useEffect, useState} from "react";
import {FetchNews} from "../../api/get.jsx";
import PaginationComponent from "../../components/Pagination/paginationComponent.jsx";

function formatDate(value) {
    if (!value) return 'Date unavailable'

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) {
        return value
    }

    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date)
}

function getSource(article) {
    return article.source?.name ?? article.source ?? article.publisher ?? 'Unknown source'
}

function getImageUrl(article) {
    return article.urlToImage ?? ''
}

export default function NewsHomePage() {

    //setting states for the news allArticles and loading state,page state
    const [allArticles, setAllArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(9)

    // in order to load data only once, after component renders.
    useEffect(() => {
        setIsLoading(true)
        async function loadData() {
            try {
                const response = await FetchNews()
                // use reponse.data.allArticles if it is an arrray , if null or undefined send bk empty array
                const articlesData = Array.isArray(response.data.articles) ? response.data.articles : []
                setAllArticles(articlesData)

            } catch (error) {
                console.log(error)
                setAllArticles([])
            }
            finally {
                setIsLoading(false)
            }
        }

        loadData()
    }, [])
    var visibleArticles=getArticles(allArticles,currentPage,articlesPerPage)
    const totalPages = Math.ceil(allArticles.length / articlesPerPage)

    return (
        <>
            {/* if the page is still loading, show the message */}
            {isLoading&& <p>Loading general news...</p>}
            <div className="container grid grid-cols-1 gap-4  " aria-label="News articles" >


                {/* the next part fetch every item from the list of allArticles and maps it to one card */}
                {visibleArticles.map((article, index) => {
                const source = getSource(article)
                const category = article.categories ?? article.category ?? 'World'
                const imageUrl = getImageUrl(article)
                const publishedAt = formatDate(article.PublishedAt)

                const articleUrl = article.url ?? article.link;
                const CardTag = articleUrl ? 'a' : 'article';
                return (
                        <>

                            <NewsCard
                                    key={article.url ?? index} news={article}
                                          category={category} source={source} publishedAt={publishedAt}
                                          imageUrl={imageUrl} cardTag={CardTag} href={articleUrl}
                            />


                        </>
                )})
            }

            </div>
            <PaginationComponent totalPages={totalPages} page={currentPage} handleClick={setCurrentPage}/>
        </>
    )
}


const getArticles=function (arr,page,articlesPerPage) {
    var arr=arr.slice((page-1)*articlesPerPage,page*articlesPerPage)
    return arr
}
import { NewsCard } from '@/components/NewsCard/NewsCard.jsx'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FetchNewsByCategory } from "../../api/get.jsx";
import '../Home/NewsHomePage.css'
import NewsCardList from "@/components/NewsCardList/NewsCardList.jsx";
import PaginationComponent from "@/components/Pagination/paginationComponent.jsx";


// page for news list based on category


export default function NewsCategoryPage() {
    const { category = 'world' } = useParams()
    const selectedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    const [newsArticles, setNewsArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(9)

    useEffect(() => {
        async function loadData() {
            setIsLoading(true)

            try {
                const response = await FetchNewsByCategory(selectedCategory)
                const articlesData = Array.isArray(response.data.articles) ? response.data.articles : []
                setNewsArticles(articlesData)
                console.log(articlesData[0])
            } catch (error) {
                console.log(error)
                setNewsArticles([])
            } finally {
                setIsLoading(false)
            }
        }

        loadData()
    }, [selectedCategory])
    const articesListPerPage=getArticles(newsArticles,currentPage,articlesPerPage)
    const totalPages = Math.ceil(newsArticles.length / articlesPerPage)
    return (
        <>
            <h1>{selectedCategory}</h1>
            {isLoading && <p>Loading {selectedCategory} news...</p>}

            <div className="container  grid grid-cols-1 gap-4 " aria-label="News articles">

                {/* the next component part gets articles per page from articesListPerPage and maps it to one card */}
                <NewsCardList   articles={articesListPerPage}  startIndex={(currentPage - 1) * articlesPerPage} />




            </div>
            <PaginationComponent totalPages={totalPages} page={currentPage} handleClick={setCurrentPage}/>

        </>
    )
}
const getArticles=function (arr,page,articlesPerPage) {
    var arr=arr.slice((page-1)*articlesPerPage,page*articlesPerPage);
    return arr
}

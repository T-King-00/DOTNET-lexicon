import { NewsCard } from '@/components/NewsCard/NewsCard.jsx'
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { FetchNewsByCategory } from "../../api/get.jsx";
import '../Home/NewsHomePage.css'




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



// page for news list based on category
export default function NewsCategoryPage() {
    const { category = 'world' } = useParams()
    const selectedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    const [newsArticles, setNewsArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <>
            <h1>{selectedCategory}</h1>
            {isLoading && <p>Loading {selectedCategory} news...</p>}

            <div className="container  grid grid-cols-1 gap-4 " aria-label="News articles">

                {/* the next part fetch every item from the list of newsArticles and maps it to one card */}
                {newsArticles.map((article, index) => {
                    const source = getSource(article)
                    const articleCategory = article.categories ?? article.category ?? 'News'
                    const imageUrl = getImageUrl(article)

                    const publishedAt = formatDate(article.publishedAt)
                    const articleUrl = article.url ?? article.link
                    const CardTag = articleUrl ? 'a' : 'article'

                    return (
                        <NewsCard
                            key={article.url ?? index}
                            news={article}
                            category={articleCategory}
                            source={source}
                            publishedAt={publishedAt}
                            imageUrl={imageUrl}
                            cardTag={CardTag}
                            href={articleUrl}
                        />
                    )
                })}
            </div>
        </>
    )
}

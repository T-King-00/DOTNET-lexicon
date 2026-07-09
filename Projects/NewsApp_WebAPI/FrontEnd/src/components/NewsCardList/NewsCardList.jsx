import {NewsCard} from "@/components/NewsCard/NewsCard.jsx";

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

{/* NewsCardList gets list of articles to show for every page */}

export default function NewsCardList({
    articles,
    fallbackCategory,
    startIndex=0
                      }) {
    return(
        <>
            { articles.map((article, index) => {
                const source = getSource(article)
                const articleCategory = fallbackCategory ??  'News'
                const imageUrl = getImageUrl(article)

                const publishedAt = formatDate(article.publishedAt)
                const articleUrl = article.url ?? article.link

                const articleIndex = startIndex+index
                const articlePath = `/news/${encodeURIComponent(articleCategory)}/${articleIndex}`;


                return (
                        <NewsCard
                            key={index}
                            news={article}
                            category={articleCategory}
                            source={source}
                            publishedAt={publishedAt}
                            imageUrl={imageUrl}
                            to={articlePath}
                            refUrl={article.url}
                            state={{article}}
                        />
                    )
                })
            }
        </>
    )



}
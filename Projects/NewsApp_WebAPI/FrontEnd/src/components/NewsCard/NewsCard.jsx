import './NewsCard.css'

export function NewsCard(props) {

  const news=props.news;
  const CardTag=props.cardTag;
  const href=props.href;
  const source=props.source;
  const publishedAt=props.publishedAt;
  const category=props.category;
  const imageUrl=props.imageUrl;
  return (
          <CardTag className="news-card " {...(href ? { href } : {})} >

            <header className="news-card__header">
              <span className="news-card__kicker">{category}</span>
              <span className="news-card__source">{source}</span>
            </header>
            <div className="news-card__rule" />

            <div className="news-card__media" aria-label="News image">
              {imageUrl ? (
                  <img src={imageUrl} alt="" className="news-card__image" loading="lazy" />
              ) : (
                  <div className="news-card__image-placeholder">
                    <span>News picture</span>
                  </div>
              )}
            </div>
            <h2 className="news-card__title">{news.title}</h2>
            <div className="news-card__byline">
              <span>By {news.author ?? source}</span>
              <time >{publishedAt?? fdsvfds}  </time>
            </div>
            <p className="news-card__description">{news.description}</p>
          </CardTag>

        )
}


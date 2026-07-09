import { Link, useLocation } from "react-router";

const fallbackArticle = {
    title: "The Morning Edition: A Closer Look at Today's Leading Story",
    description:
        "A refined editorial reading experience with period-inspired typography, measured spacing, and the texture of a classic broadsheet.",
    content:
        "This article detail page is designed to feel like a polished vintage newspaper while keeping the clarity and responsiveness expected from a modern web application. It gives the headline room to breathe, treats metadata as part of the editorial voice, and balances image, summary, and body text in a layout built for focused reading.",
    author: "NewsWebApp Editorial Desk",
    source: { name: "NewsWebApp" },
    publishedAt: new Date().toISOString(),
    category: "Editorial",
    url: "",
    urlToImage: "",
};

function formatDate(value) {
    if (!value) return "Date unavailable";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return new Intl.DateTimeFormat("en", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

function getSource(article) {
    return article.source?.name ?? article.source ?? article.publisher ?? "Unknown source";
}

function getPublishedDate(article) {
    return article.publishedAt ?? article.PublishedAt ?? article.date;
}

function getImageUrl(article) {
    return article.urlToImage ?? article.imageUrl ?? article.image ?? "";
}

function getArticleText(article) {
    return article.content ?? article.body ?? article.description ?? fallbackArticle.content;
}

export default function ArticleDetailsPage() {
    const { state } = useLocation();
    const article = state?.article ?? fallbackArticle;
    const source = getSource(article);
    const publishedAt = formatDate(getPublishedDate(article));
    const category = article.category ?? article.categories ?? "News";
    const imageUrl = getImageUrl(article);
    const articleText = getArticleText(article);
    const articleUrl = article.url ?? article.link;

    return (
        <main className="mx-auto my-6 max-w-6xl border-y-4 border-double border-stone-900 bg-[#f8f1df] px-4 py-6 text-left text-stone-950 shadow-[0_18px_45px_rgba(67,56,37,0.16)] sm:px-8 lg:px-12">
            <header className="border-b-2 border-stone-900 pb-5 text-center">
                <div className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-stone-800/60 py-2 font-serif text-xs font-bold uppercase tracking-[0.2em] text-stone-700">
                    <span>{category}</span>
                    <span aria-hidden="true">Vol. 1</span>
                    <time dateTime={getPublishedDate(article)}>{publishedAt}</time>
                </div>

                <p className="font-serif text-xs font-semibold uppercase tracking-[0.28em] text-stone-600">
                    Special Report
                </p>

                <h1 className="mx-auto mt-3 max-w-5xl font-serif text-4xl font-black uppercase leading-[0.92] tracking-normal text-stone-950 sm:text-6xl lg:text-7xl">
                    {article.title ?? fallbackArticle.title}
                </h1>

                <p className="mx-auto mt-5 max-w-3xl font-serif text-lg leading-8 text-stone-700 sm:text-xl">
                    {article.description ?? fallbackArticle.description}
                </p>
            </header>

            <section className="grid gap-8 border-b border-stone-900/60 py-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
                <figure className="m-0 border border-stone-800 bg-stone-100 p-2 shadow-[5px_5px_0_rgba(68,64,60,0.24)]">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt=""
                            className="aspect-[16/10] w-full object-cover grayscale contrast-110"
                        />
                    ) : (
                        <div className="flex aspect-[16/10] w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#e7dcc4_0,#e7dcc4_2px,#f4ead4_2px,#f4ead4_8px)] px-6 text-center font-serif text-sm font-bold uppercase tracking-[0.24em] text-stone-600">
                            Image unavailable
                        </div>
                    )}
                    <figcaption className="mt-2 border-t border-stone-400 pt-2 font-serif text-xs uppercase tracking-[0.16em] text-stone-600">
                        Filed from {source}
                    </figcaption>
                </figure>

                <aside className="flex flex-col justify-between gap-6 border-y border-stone-800/60 py-5 lg:border-y-0 lg:border-l lg:py-0 lg:pl-8">
                    <div>
                        <p className="font-serif text-xs font-bold uppercase tracking-[0.24em] text-stone-600">
                            Byline
                        </p>
                        <p className="mt-2 font-serif text-2xl font-black leading-tight text-stone-950">
                            {article.author ?? source}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-stone-700">
                            Published by {source}. This edition preserves the feel of print while keeping source links and navigation close at hand.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-stone-800/60 pt-5 font-serif text-sm">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Source</p>
                            <p className="mt-1 font-bold text-stone-950">{source}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-600">Section</p>
                            <p className="mt-1 font-bold text-stone-950">{category}</p>
                        </div>
                    </div>
                </aside>
            </section>

            <article className="mx-auto grid max-w-5xl gap-8 py-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
                <div className="border-y border-stone-800/60 py-4 font-serif text-xs font-bold uppercase tracking-[0.2em] text-stone-600 lg:border-y-0 lg:border-r lg:pr-5">
                    <p>Full Story</p>
                    <p className="mt-3 text-stone-500">NewsWebApp Archive</p>
                </div>

                <div className="font-serif text-lg leading-9 text-stone-800 sm:text-xl sm:leading-10">
                    <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-stone-950">
                        {articleText}
                    </p>

                    {article.description && article.description !== articleText ? (
                        <p className="mt-6 border-l-4 border-stone-900 pl-5 text-stone-700">
                            {article.description}
                        </p>
                    ) : null}
                </div>
            </article>

            <footer className="flex flex-col gap-3 border-t-2 border-stone-900 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    to="/news"
                    className="inline-flex justify-center border border-stone-900 px-4 py-2 font-serif text-sm font-bold uppercase tracking-[0.16em] text-stone-900 transition hover:bg-stone-900 hover:text-[#f8f1df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                >
                    Back to front page
                </Link>

                {articleUrl ? (
                    <a
                        href={articleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center bg-stone-900 px-4 py-2 font-serif text-sm font-bold uppercase tracking-[0.16em] text-[#f8f1df] transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                    >
                        Read original report
                    </a>
                ) : null}
            </footer>
        </main>
    );
}

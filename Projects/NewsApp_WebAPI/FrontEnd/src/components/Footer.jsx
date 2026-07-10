import { Link } from "react-router";

const footerGroups = [
    {
        title: "Get in Touch",
        links: [
            { label: "About News Today", to: "/news" },
            { label: "Contact the editor", href: "mailto:editor@newstoday.local" },
            { label: "Archive support", href: "mailto:support@newstoday.local" },
        ],
    },
    {
        title: "Sections",
        links: [
            { label: "World", to: "/news/World" },
            { label: "Business", to: "/news/Business" },
            { label: "Science", to: "/news/Science" },
            { label: "Sports", to: "/news/Sports" },
        ],
    },
    {
        title: "More From News Today",
        links: [
            { label: "Front page", to: "/news" },
            { label: "Latest reports", to: "/news/Technology" },
            { label: "Culture desk", to: "/news/Entertainment" },
            { label: "Health briefings", to: "/news/Health" },
        ],
    },
];

export default function Footer() {

    return(
        <footer className="mx-auto mt-8 w-full border-t-2 border-double border-stone-900 bg-[#f8f1df] px-4 py-8 text-stone-950 shadow-[0_-10px_28px_rgba(67,56,37,0.1)] sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="border-b border-stone-800/60 pb-5 text-center">
                    <p className="font-serif text-[0.68rem] font-bold uppercase tracking-[0.28em] text-stone-600">
                        News Today Archive Edition
                    </p>
                    <p className="mt-3 font-serif text-3xl font-black uppercase leading-none text-stone-950 sm:text-4xl">
                        News Today
                    </p>
                    <p className="inline-flex justify-center mx-auto mt-3 max-w-3xl font-serif text-sm leading-7 text-stone-700 sm:text-base">
                        Presenting today’s news in a refined digital edition inspired by the grace of classic newspaper journalism.                    </p>
                </div>

                <div className="flex flex-col gap-3 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
                    <p className="font-serif text-[0.7rem] font-bold uppercase tracking-[0.2em] text-stone-600">
                        Developed by Tony Riad
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-serif text-[0.68rem] uppercase tracking-[0.16em] text-stone-600 md:justify-end">
                        <span>All rights reserved</span>
                        <span aria-hidden="true">|</span>
                        <span>Independent Daily Dispatch</span>
                        <span aria-hidden="true">|</span>
                        <span>Vol. 1</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

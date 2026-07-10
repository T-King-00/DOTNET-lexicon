import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { FetchCategories } from "../../api/get.jsx";

const fallbackCategories = [
    "World",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
];

export default function NavBar({clearSearchKey}) {
    const [categories, setCategories] = useState(fallbackCategories);
    const issueDate = new Intl.DateTimeFormat("en", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date());



    useEffect(() => {
        // ignore usage is to avoid updating state on an unmounted component and
        // prevents stale async results from affecting the navbar after cleanup.
        let ignore = false;

        // fetch categories from the api, if not found, set them manually
        FetchCategories()
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("Failed to fetch categories");
                }
                if (!Array.isArray(response.data)) {
                    throw new Error("Invalid categories data");
                }

                if (!ignore) {
                    setCategories(response.data);
                }
            })
            .catch((error) => {
                if (!ignore) {
                    setCategories(fallbackCategories);
                }
                console.log(error);
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <nav
            aria-label="Main navigation"
            className="mx-auto w-full border-y-1
            border-double border-stone-900
            bg-[#f8f1df] px-2 py-1 text-stone-950
            shadow-[0_12px_30px_rgba(67,56,37,0.14)] sm:px-6"
        >
            <div className="flex flex-col items-center gap-2 border-b border-stone-800/70 pb-2">
                <p className="w-full text-center font-serif text-[1px] font-semibold uppercase tracking-[0.24em] text-stone-700 sm:text-xs">
                    Independent Daily Dispatch
                </p>

                <Link
                    to="/news"
                    onClick={clearSearchKey}
                    className="max-w-full font-serif text-4xl font-black uppercase leading-none tracking-normal text-stone-950 decoration-stone-900 underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-900 sm:text-4xl lg:text-6xl"
                >
                    News Today
                </Link>

                <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 border-y border-stone-800/50 py-1 font-serif text-[0.68rem] uppercase tracking-[0.18em] text-stone-700 sm:text-xs">
                    <span>Est. 2026</span>
                    <span aria-hidden="true">No. 01</span>
                    <span>{issueDate}</span>
                </div>
            </div>

            <ul className="mt-0 mb-[-0.5rem] pb-2 pt-1 flex list-none flex-row gap-2 overflow-x-auto whitespace-nowrap px-1 pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
                {categories.map((category) => (
                    <li key={category} className="flex-none">
                        <NavLink
                            to={`/news/${category}`}
                            className={({ isActive }) =>
                                [
                                    "block border border-transparent px-4 py-2 font-serif text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:text-[0.8rem]",
                                    isActive
                                        ? "border-stone-900 bg-stone-900 text-[#f8f1df] shadow-[2px_2px_0_rgba(68,64,60,0.35)]"
                                        : "text-stone-800 hover:border-stone-700 hover:bg-stone-200/70 hover:text-stone-950",
                                ].join(" ")
                            }
                        >
                            {category}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

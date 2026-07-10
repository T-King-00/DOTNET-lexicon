import { IoSearchCircle } from "react-icons/io5";
import {useState} from "react";
export default function SearchComponent(props) {

    const handleSearch=props.handleSearch;
    const [searchValue,setSearchValue]=useState("");

    return (
        <section className="mx-auto my-5 w-full border-y-2 border-stone-900 bg-[#f6edd8] px-4 py-4 text-left shadow-[0_10px_28px_rgba(67,56,37,0.12)] sm:px-6">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    <p className="font-serif text-[0.7rem] font-bold uppercase tracking-[0.24em] text-stone-600">
                        Archive Search
                    </p>
                    <label
                        htmlFor="searchByKeyword"
                        className="mt-2 block font-serif text-2xl font-black uppercase leading-tight text-stone-950 sm:text-3xl"
                    >
                        Search by Keyword
                    </label>
                    <p className="mt-2  leading-6 text-stone-700 sm:text-base">
                        Find reports, features, and headlines across the latest edition.
                    </p>
                </div>

                <form
                    onSubmit={(event)=>{
                        event.preventDefault()
                        handleSearch(searchValue)
                        setSearchValue("");
                        document.getElementById("searchByKeyword").value="";
                    }}
                    className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row
                    items-center"
                      role="search">
                    <input
                        type="search"
                        name="search"
                        id="searchByKeyword"
                        placeholder="Politics, markets, science..."
                        className="min-w-0 flex-1 border border-stone-900 w-full
                        bg-[#fffaf0] px-4 py-3 font-serif text-base
                        text-stone-950 placeholder:text-stone-500
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                        onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="inline-flex justify-center shrink-0 border border-stone-900
                        w-1/5 align-middle
                        p-2 bg-stone-900  font-serif text-sm font-bold
                        uppercase tracking-[0.18em] text-[#f8f1df] transition
                         hover:bg-stone-700 focus-visible:outline focus-visible:outline-2
                         focus-visible:outline-offset-2 focus-visible:outline-stone-900"

                    >
                        <IoSearchCircle className={"text-3xl "}/>

                    </button>
                </form>
            </div>
        </section>
    );
}

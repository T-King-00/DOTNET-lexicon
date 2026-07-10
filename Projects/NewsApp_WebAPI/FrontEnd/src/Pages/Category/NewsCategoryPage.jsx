import { useParams } from "react-router";
import { useEffect, useReducer, useState } from "react";
import { FetchNewsByCategory } from "../../api/get.jsx";
import '../Home/NewsHomePage.css'
import NewsCardList from "@/components/NewsCardList/NewsCardList.jsx";
import PaginationComponent from "@/components/Pagination/paginationComponent.jsx";

// NewsCategoryPage component for news list fetched based on category.

function reducer(state, action) {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case 'success':
            return {
                ...state,
                isLoading: false,
                error: null,
                articles: action.payload,
            }
        case 'error':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default function NewsCategoryPage() {

    //related to category title
    const { category = 'world' } = useParams()
    const selectedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()


    //related to pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(9)



    const initialState = {
        isLoading: false,
        error: null,
        articles: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function loadData() {
            dispatch({ type: 'loading' })

            try {
                const response = await FetchNewsByCategory(selectedCategory)
                const articlesData = Array.isArray(response.data.articles) ? response.data.articles : []
                dispatch({ type: 'success', payload: articlesData })
                console.log(articlesData[0])
            } catch (error) {
                console.log(error)
                dispatch({ type: 'error', payload: error })
            }
        }

        loadData()
    }, [selectedCategory])
    const articlesListPerPage=getArticles(state.articles,currentPage,articlesPerPage)
    const totalPages = Math.ceil(state.articles.length / articlesPerPage)
    return (
        <>
            <h1 className={"h-[3vh]"}>{selectedCategory}</h1>
            {state.isLoading && <p>Loading {selectedCategory} news...</p>}
            {state.error && <p>Failed to load {selectedCategory} news.</p>}

            <div className="container  grid grid-cols-1 gap-4 " aria-label="News articles">

                {/* the next component part gets articles per page from articlesListPerPage and maps it to one card */}
                <NewsCardList   articles={articlesListPerPage}  startIndex={(currentPage - 1) * articlesPerPage} />
            </div>
            <PaginationComponent totalPages={totalPages} page={currentPage} handleClick={setCurrentPage}/>

        </>
    )
}
const getArticles=function (arr,page,articlesPerPage) {
    var arr=arr.slice((page-1)*articlesPerPage,page*articlesPerPage);
    return arr
}

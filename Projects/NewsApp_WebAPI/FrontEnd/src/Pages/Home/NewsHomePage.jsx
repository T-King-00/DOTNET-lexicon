import './NewsHomePage.css'
import {useEffect, useReducer, useState} from "react";
import {FetchNews, FetchNewsByKeyword} from "../../api/get.jsx";
import PaginationComponent from "../../components/Pagination/paginationComponent.jsx";
import NewsCardList from "@/components/NewsCardList/NewsCardList.jsx";
import { useOutletContext } from "react-router";

function reducer(state,action) {
    switch (action.type)
    {
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
                articles:action.payload
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

export default function NewsHomePage() {

    //setting states for the news allArticles and pageIndex state
    const [currentPageIndex, setcurrentPageIndex] = useState(1)
    const [articlesPerPage, setArticlesPerPage] = useState(9)


    //search Term from parent component
    const { searchTerm } = useOutletContext();



    //reducer
    const initialState={
        isLoading:false,
        error:null,
        articles:[]
    }
    const [state,dispatch]=useReducer(reducer,initialState)

    // in order to load data only once, after component renders.
    useEffect(() => {
        dispatch({type:'loading'})

        async function loadData() {
            try {
                let response;
                if (searchTerm=="" || searchTerm==null || searchTerm==undefined) {
                    response = await FetchNews()
                }
                else {
                    console.log("search term is : ",searchTerm)
                    response = await FetchNewsByKeyword(searchTerm)
                }

                console.log(response.status)
                // use reponse.data.allArticles if it is an arrray , if null or undefined send bk empty array
                const articlesData = Array.isArray(response.data.articles) ? response.data.articles : []
                dispatch({type:'success',payload:articlesData});

            } catch (error) {
                dispatch({type:'error',payload:error})
            }
        }
        loadData().catch(error => console.error('Error fetching news:', error))
        //related to pagniation

    }, [searchTerm])
    const articlesListPerPage=getArticles(state.articles,currentPageIndex,articlesPerPage)
    const totalPages = Math.ceil(state.articles.length / articlesPerPage)

    return (
        <>
            {/* if the page is still loading, show the message */}
            {state.isLoading&& <p>Loading general news...</p>}
            {state.error && <p>Failed to load news.</p>}
            <div className="container grid grid-cols-1 gap-4  " aria-label="News articles" >
                {/* the next part call NewsCardList and give it the articesListPerPage to render */}
                <NewsCardList   articles={articlesListPerPage}  startIndex={(currentPageIndex - 1) * articlesPerPage} />
            </div>
            <PaginationComponent totalPages={totalPages} page={currentPageIndex} handleClick={setcurrentPageIndex}/>
        </>
    )
}



// this function returns a list of articles depending on which page index the user is currently at.
// Ex: first page returns first 9 articles , second page second 9 articles,etc...
const getArticles=function (arr,page,articlesPerPage) {
    var slicedArticles=arr.slice((page-1)*articlesPerPage,page*articlesPerPage)
    return slicedArticles
}




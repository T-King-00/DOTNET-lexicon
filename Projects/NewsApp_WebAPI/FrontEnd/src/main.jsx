import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements, Routes, Navigate} from "react-router"
import './index.css'
import NewsHomePage from "./Pages/Home/NewsHomePage.jsx";
import ArticleDetailsPage from "./Pages/NewsArticleDetailsPage/ArticleDetailsPage.jsx";
import App from "./App.jsx";
import NewsCategoryPage from "./Pages/Category/NewsCategoryPage.jsx";

// first way
/*const Router=createBrowserRouter (createRoutesFromElements(
    // first way
        <Route path="/"  element={<App/>} errorElement={<p> Route error: Failed to render</p>}>
            <Route path="/"  element={<NewsHomePage/>}>
                <Route path="news/:{newsIndex}"  element={<ArticleDetailsPage/>}/>
            </Route>
        </Route>
    )
)*/
const Router=createBrowserRouter([
    {
        path:"/", Component:App,
        errorElement:<p> Route error: Failed to render</p>,
        children:[
            {
                index:true, element:<Navigate to="/news"/>
            },
            { path: "news" ,Component: NewsHomePage},
            { path:"news/:category", Component: NewsCategoryPage},
            { path:"news/:category/:newsIndex", Component:ArticleDetailsPage}

        ]
    }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)

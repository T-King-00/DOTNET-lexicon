import {Outlet} from "react-router";
import NavBar from "@/components/NavBar/NavBar.jsx";
import NewsHomePage from "./Pages/Home/NewsHomePage.jsx";
import SearchComponent from "@/components/SearchBar/SearchComponent.jsx";

function App() {

  return (
    <>
        <NavBar/>
        <SearchComponent/>
        <Outlet/>
    </>
  )
}

export default App

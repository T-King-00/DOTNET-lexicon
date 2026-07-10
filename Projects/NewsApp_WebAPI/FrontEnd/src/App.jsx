import {Outlet} from "react-router";
import NavBar from "@/components/NavBar/NavBar.jsx";
import SearchComponent from "@/components/SearchBar/SearchComponent.jsx";
import Footer from "@/components/Footer.jsx";
import {useState} from "react";

function App() {

    const [searchTerm,setSearchTerm]=useState("");

  return (
    <>
        <NavBar clearSearchKey={()=>setSearchTerm("")} />
        <SearchComponent handleSearch={setSearchTerm}/>
        <Outlet context={{searchTerm}} />
        <Footer/>
    </>
  )
}

export default App

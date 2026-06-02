import './App.css'
import Footer from "./sections/Footer/Footer.jsx";
import Header from "./sections/Header/Header.jsx";
import Skills from "./components/Skills/Skills.jsx";
import About from "./components/About/About.jsx";
import {ProjectsMemo} from "./pages/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import BodyContainer from "./sections/BodyContainer/BodyContainer.jsx";
import SideBar from "./sections/SideBar/SideBar.jsx";
import {
    BrowserRouter,
    NavLink,
    Route, Routes,
} from "react-router"
import Resume from "./pages/Resume/Resume.jsx";

function App() {
  return (
<BrowserRouter>
    <div id="App">
        <Header/>
        <nav>
            <NavLink to={"projects"}>projects</NavLink>
            <NavLink to={"/"}>Resume</NavLink>
        </nav>
        
        <aside className="PageContainer">
            <SideBar />
     
            <BodyContainer>
                <Routes>
                    <Route index element={<Resume/>} />
                    <Route path={"projects"} element={<ProjectsMemo/>} />
                </Routes>
                <About/>
                <Skills/>
                <Education/>
                <Experience/>
            </BodyContainer>
           
        </aside>
        <Footer/>
        </div>
    
    
</BrowserRouter>
  )
}



export default App

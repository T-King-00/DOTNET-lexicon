import './App.css'
import Footer from "./sections/Footer/Footer.jsx";
import Header from "./sections/Header/Header.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import BodyContainer from "./sections/BodyContainer/BodyContainer.jsx";
import SideBar from "./sections/SideBar/SideBar.jsx";

function App() {
  const Banner=()=> (<p>my name tis tony</p>);

  return (
    <div id="App">
        <Header/>
        <aside className="PageContainer">
            <SideBar />
            <BodyContainer>
                <About/>
                <Skills/>
                <Projects/>
                <Education/>
                <Experience/>
           
            </BodyContainer>
        
        </aside>
        <Footer/>
     
     
    </div>
  )
}

export default App

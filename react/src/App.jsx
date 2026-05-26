import './App.css'
import Footer from "./sections/Footer/Footer.jsx";
import Header from "./sections/Header/Header.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import BodyContainer from "./sections/BodyContainer/BodyContainer.jsx";

function App() {
  const Banner=()=> (<p>my name tis tony</p>);

  return (
    <>
  
      <Header/>
        <BodyContainer>
              <About/>
              <Skills/>
              <Projects/>
              <Education/>
              <Experience/>
        </BodyContainer>
      <Footer/>
     
    </>
  )
}

export default App

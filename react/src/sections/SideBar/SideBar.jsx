import "./SideBar.css"
import Img from "../../assets/PersonalPic.jpg"
import {useState} from "react";
const SideBarImg=Img;
function SideBar() {
    let [theme,setTheme]=useState(0);

    const toggleTheme = () => {
        setTheme(theme === 0 ? 1 : 0);
        const app=document.getElementById("App")
        app.classList.toggle("dark-theme");
    }
    

    return(
        
        <>
            <div className="SideBar-container">
                <div className="sideBar-pic-container">
                    <img  src={SideBarImg}  alt={"My Image holder"} id={"sidebarImgHolder"}/>
                </div>
                <div className="SideBar-header">
                    <h1 >Tony Riad</h1>
                   
                </div>

                <div id="navigation-toggle" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
                <div id="navigation-menu" className="nav-menu">
                    <nav id="navBar">
                        <ul className="nav-items-list">
                            <li>
                                <a href="#section1-about" className="nav-item">About</a>
                            </li>
                            <li>
                                <a href="#section2-skills" className="nav-item">Skills</a>
                            </li>
                            <li>
                                <a href="#section3-projects" className="nav-item">Projects</a>
                            </li>
                            
                            <li>
                                <a href="#section4-education" className="nav-item">Education</a>

                            </li>
                            <li>
                                <a href="#section5-experience" className="nav-item">Experience</a>

                            </li>
                        </ul>

                    </nav>

                </div>
                <button className="theme-toggle-button" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}

export default SideBar;

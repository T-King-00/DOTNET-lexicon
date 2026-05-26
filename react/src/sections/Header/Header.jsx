import "./Header.css"
function Header() {
    return (
        <header className="header-container">
            <div className="nav-container">
                <h1 className="nav-container-header">Tony Riad's Portfolio</h1>
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
                            <a href="#section2-skills" className="nav-item">Skills</a>
                            <a href="#section3-projects" className="nav-item">Projects</a>
                            <a href="#section4-education" className="nav-item">Education</a>
                            <a href="#section5-experience" className="nav-item">Experience</a>
                        </li>
                    </ul>

                </nav>

            </div>

        </header>


    )
}

export default Header;
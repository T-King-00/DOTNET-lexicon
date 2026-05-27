import "./Header.css"

function Header() {
    return (
        
        <header className="header-container">
            <ul className="header-list">
                <li className={ "header-list-item"}> 
                    <a className="social-link" href="https://www.linkedin.com/in/tony-r-5393901b2"
                       target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <span className="social-icon linkedin-icon" aria-hidden="true"></span>
                    </a>
                </li>
                <li className={ "header-list-item"}>
                    <a className="social-link" href="https://github.com/T-King-00" target="_blank"
                       rel="noopener noreferrer" aria-label="GitHub profile">
                        <span className="social-icon github-icon" aria-hidden="true"></span>
                    </a>
                    
                </li>
            </ul>
        </header>


    )
}

export default Header;

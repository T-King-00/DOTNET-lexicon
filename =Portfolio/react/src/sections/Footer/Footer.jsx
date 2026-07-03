import "./Footer.css"

const githubLink="https://github.com/T-King-00";
const linkedinLink="https://www.linkedin.com/in/tony-r-5393901b2";
function Footer() {

   return( 
       <footer>
        <div className="footer-container">
            <div className="footer-section about">
                <p>Interested in collaborating? <a id={"get-in-touch"} href="mailto:tony_riad@outlook.com">Get in touch</a></p>
            </div>
            <nav className="footer-links" aria-label="Social and navigation links">
                <a href={linkedinLink} target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a id={"back-to-top"} href="#Header">Back to Top ↑</a>
            </nav>
            <div className="footer-bottom">
                <p>&copy; 2026 Tony Riad. <br/>All rights reserved.</p>
            </div>
        </div>
    </footer>)

}

export default Footer;
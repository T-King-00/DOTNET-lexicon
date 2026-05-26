function Projects() {
    return (
        <section id="section3-projects" className="section">
            <h2>Projects</h2>
            <div className="project-item">
                <h3>3-Tier Web Application Deployment (AWS)</h3>
                <p>Designed and deployed a scalable multi-tier architecture using EC2, RDS, CloudWatch, Auto
                    Scaling.</p>
            </div>
            <div className="project-item">
                <h3>Automation for generation of UML design</h3>
                <p>Logic module for analyzing text input and generating class/use-case diagrams. Technologies: Python,
                    NLTK, SpaCy, Flask API, React.</p>
            </div>
            <div className="project-item">
                <h3>Bike Ecommerce Web Application</h3>
                <p>Service-oriented e-commerce system using ASP.NET MVC and WCF Services. Technologies: C#, .NET MVC,
                    WCF, Razor, MSSQL, Bootstrap.</p>
            </div>
            <div className="project-item">
                <h3>Gym Management System</h3>
                <p>Built a JavaFX GUI application with role-based access for admins and employees to manage classes,
                    members, and trainers. Technologies: Java, JavaFX, MSSQL, OOP.</p>
            </div>
        </section>
    )
}
export default Projects;
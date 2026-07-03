import "./skills.css"
function Skills() {
    return (
        <section id="section2-skills" className="section">
            <h2>Technical Skills</h2>
            <div className="skills-list-container">
                <ul className="skills-list">
                    <li className="skills-list-item"><strong>Backend & Application Development:</strong>
                        <p>C#, .NET Core, Java, Python, WCF, LINQ, Entity Framework Core, RESTful API development,
                            WPF, relational databases
                        </p> </li>
                    <li className="skills-list-item"><strong>Frontend & Web Development:</strong>
                        <p> React, JavaScript, HTML, CSS, Blazor, Bootstrap, Tailwind CSS, WebSockets </p>
                    </li >

                    <li className="skills-list-item"><strong>Testing & Quality Assurance:</strong> 
                        <p>xUnit, Selenium</p>
                    </li>
                    <li className="skills-list-item"><strong>DevOps & Cloud Platforms:</strong>
                        <p>
                            Docker, AWS, Azure, CI/CD pipelines, GitHub Actions, Jenkins, Bash
                        </p>
                    </li>
                    <li className="skills-list-item"><strong>Development Tools:</strong> 
                       <p>
                           Git, GitHub, Postman, AI-assisted development tools
                       </p>   
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;

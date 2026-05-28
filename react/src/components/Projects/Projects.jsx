import projects from "./ProjectObjects.jsx"
import "./projects.css"
function Projects() {
    return (
        <section id="section3-projects" className="section">
            <h2>Projects</h2>
            <ul className="projects-list">  
                {projects.map(p => (
                        <li className="project-item" key={p.id}>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className="project-stack">
                                <strong>Tech Stack:</strong>
                                <span>{p.techStack.join(", ")}</span>
                            </div>
                        </li>
                ))}
            </ul>
        </section>
    )
}
export default Projects;
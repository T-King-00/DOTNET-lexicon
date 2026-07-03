import projectsObj from "./ProjectObjects.jsx"
import "./projects.css"
import React, {useState} from "react";
function Projects() {
    const [projects,setProjects]=useState(projectsObj);
    const addProject=()=> {
        setProjects([...projectsObj,
            
            {
                id: 5,
                title: "Gym Management System",
                description:
                    "Built a JavaFX GUI application with role-based access for admins and employees to manage classes, members, and trainers.",
                techStack: ["Java", "JavaFX", "MSSQL", "OOP Concepts"],
            }
            ]);
    } 
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
export const ProjectsMemo=React.memo(Projects);
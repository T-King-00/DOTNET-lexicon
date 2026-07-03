import "./education.css"
function Education() {
    return(
        <section id="section4-education" className="section">
            <h2>Education</h2>
            <ul>
                <li className="education-item">
                    <div >
                        <h3>Master's Courses in Software Engineering</h3>
                        <p>Blekinge Institute of Technology (BTH), Sweden (2024 - 2025)</p>
                        <p>Courses: Software Testing, Software Sustainability, Software Quality Engineering, Software Metrics, Cloud
                            Computing, Applied AI, Programming in Unix Environment.</p>
                    </div>
                </li>
                <li className="education-item">
                    <div >
                        <h3>Bachelor's Degree in Software Engineering</h3>
                        <p>Ain Shams University, Egypt (2019 - 2023)</p>
                        <p>Grade: Very Good with Honors (GPA: B).</p>
                    </div>
                </li> 
                <li className="education-item">
                <div >
                    <h3>Cloud Architecture (AWS)</h3>
                    <p>Information Technology Institute, Egypt (2023)</p>
                </div>
                </li>
                <li className="education-item" ><div >
                        <h3>Technical Support Fundamentals Course</h3>
                        <p>Google (2020)</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default Education;


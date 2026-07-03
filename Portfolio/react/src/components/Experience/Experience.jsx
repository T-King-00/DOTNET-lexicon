import "./experience.css";
function Experience() {
    return (
        <section id="section5-experience" className="section">
            <h2>Experience</h2>
            <ul>
                <li>
                    <div className="experience-item">
                        <h3>Junior .NET Developer Program</h3>
                        <p><strong>Lexicon, Sweden</strong> (2026 - Present)</p>
                        <ul>
                            <li>Intensive practical training in modern, agile development.</li>
                            <li>Building scalable .NET projects from scratch in a team environment.</li>
                            <li>Focusing on C#, ASP.NET Core, Entity Framework, and clean architecture.</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="experience-item">
                        <h3>Expedition Worker</h3>
                        <p><strong>Guldfågeln AB, Sweden</strong> (Summer 2024)</p>
                        <ul>
                            <li>Utilized warehouse management systems and handheld scanners for inventory tracking.</li>
                            <li>Operated forklifts and managed order picking and shipments.</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="experience-item">
                        <h3>Volunteer IT Support</h3>
                        <p><strong>Saint Mary Saint Beshoy Church, Egypt</strong> (2018 - 2022)</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Experience;
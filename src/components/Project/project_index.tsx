import React, { useState } from "react";
import ProjectList from "./project_list";

const ProjectIndex = () => {
    const projectList = [
        {
            name: "Project 1",
            description: "This is project 1",
            Task: [
                {
                    id:3,
                    name: "Task 1",
                    description: "This is task 1"
                },
                {
                    id:3,
                    name: "Task 2",
                    description: "This is task 2"
                }
            ]
        },
        {
            name: "Project 2",
            description: "This is project 2",
            Task: [
                {
                    id:3,
                    name: "Task 3",
                    description: "This is task 3"
                },
                {
                    id:3,
                    name: "Task 4",
                    description: "This is task 4"
                }
            ]
        }
    ];

    const [projects, setProjects] = useState(projectList);
    return (
        <div>
            <ProjectList projects={projects}/>
        </div>
    );
}

export default ProjectIndex;
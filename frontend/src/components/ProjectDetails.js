import React from "react";
import { useParams } from "react-router-dom";

const ProjectItem = ({ project, all_users }) => {
    return (
        <tr>
            <td>{project.project_name}</td>
            <td>{project.project_link}</td>
            <td>{project.created_at}</td>
            <td>{project.updated_at}</td>
            <td>
                {project.users.map((project_users_id) => {
                    let project_users = all_users.find(project_users => project_users.id === project_users_id)
                    return user.username + ' '
                })}
            </td>
        </tr>
    )
}

const ProjectDetails = ({ projects, project_users }) => {
    let { project_title } = useParams()
    let filtered_projects = projects.filter((project) => project.title.includes(project_title))
    return (
        <div>
            <h3>Project "{project_title}"</h3>
            <table style={{ margin: '0 auto', width: '70%', tableLayout: 'fixed' }}>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Project Link</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Project Users</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered_projects.map((project_, index) => <ProjectItem key={index}
                        project={project_}
                        all_users={project_users} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ProjectDetails;

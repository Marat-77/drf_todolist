import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import React from "react";
import './User.css';

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                <Link to={`/projects/${project.url}`}>{project.project_name}</Link>
            </td>
            <td>
                <Link to={`${project.project_link}`}>repos</Link>
            </td>
            <td>{Date.parse(project.created_at)}</td>
            <td>{Date.parse(project.updated_at)}</td>
            <td>{project.project_users}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table className="mytable">
            <th>Project Name</th>
            <th>Project Link</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Project Users</th>
            {projects.map((project_) => <ProjectItem project={project_}/>)}
        </table>
    )
}

export default ProjectList;

// компонент Project

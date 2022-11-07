import React, { Component } from 'react';
// import React from "react";
import './User.css';

const TodoItem = ({todo, delete_todo}) => {
    return (
        <tr>
            <td>{todo.project.project_name}</td>
            <td>{todo.todo_body}</td>
            <td>{todo.created_at}</td>
            <td>{todo.updated_at}</td>
            <td>{todo.is_active}</td>
            <td>{todo.todo_user}</td>
            <td>
            <button onClick={() => delete_todo(todo.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}

const TodoList = ({todos, delete_todo}) => {
    return (
        <table className="mytable">
            <th>Todo Project</th>
            <th>Todo Name</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Is Active</th>
            <th>Todo Users</th>
            <th></th>
            {todos.map((todo_) => <TodoItem todo={todo_}/>)}
        </table>
    )
}

export default TodoList;

// компонент Todo

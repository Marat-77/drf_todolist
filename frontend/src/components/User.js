import React from "react";
import './User.css';

const UserItem = ({user}) => {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table className="mytable">
            <th>User name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            {users.map((user_) => <UserItem user={user_}/>)}
        </table>
    )
}

export default UserList

// компонент Users

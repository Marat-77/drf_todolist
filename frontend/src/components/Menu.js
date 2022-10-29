import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Menu.css';


const Menu = ({ }) => {
    return (
        <div className="menu">
            <nav className="container">
                <ul className="ulmenu">
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;


// const Menu = ({ menu_props }) => {
//     // console.log(menu_props.menu_auth)
//     // console.log(menu_props.menu_auth)
//     return (
//         <div className="menu">
//             <nav className="container">
//                 <ul className="ulmenu">
//                     <li>
//                         <Link to="/users">Users</Link>
//                     </li>
//                     <li>
//                         <Link to="/projects">Projects</Link>
//                     </li>
//                     <li>
//                         <Link to="/todos">Todos</Link>
//                     </li>
//                     <li>
//                         {props.menu_auth ? <button onClick={() => props.menu_logout}>Logout</button> : <Link to="/login">Login</Link>}
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
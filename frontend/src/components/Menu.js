import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return(
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

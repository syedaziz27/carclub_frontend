import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';

export default () => {

    const loggedOut = <><li className="nav-item">
    <Link className="nav-link" to="/signup">Sign Up</Link>
</li>
    <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
    </li></>

const loggedIn = <><li className="nav-item">
    <Link className="nav-link" to="/logout">Logout</Link>
</li></>

return (
    <>
        <div className='carclub_header'>
            <a >Car Club</a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <AuthContext.Consumer>
                    {
                        user => {
                            if (user) return loggedIn
                            else return loggedOut
                        }
                    }
                </AuthContext.Consumer>
            </ul>
        </nav>
    </>
)
}

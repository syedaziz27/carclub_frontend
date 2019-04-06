import React  from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import SearchList from './searchList'
import './header.css'

export default class Header extends React.Component {

    state = {

    }

     loggedOut = <><li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li></>

     loggedIn = <><li className="nav-item">
        <Link className="nav-link" to="/logout">Logout</Link>
        <Link className='nav-link' to="/update">Update Profile</Link>
        <Link className='nav-link' to="/mycars">My Cars</Link>

    </li></>

    render () {
        return (
            <>
                <div className='carclub_header'>
                    <div>Car Club</div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        
                        <AuthContext.Consumer>
                            {
                                user => {
                                    if (user) return (
                                        <>
                                        {this.loggedIn}
                                        <img className='profile_pic' src={user.picture} alt={`alt`}></img>
                                        <h3>{user.username}</h3>
                                        </>
                                    )
                                    else return this.loggedOut
                                }
                            }
                        </AuthContext.Consumer>
                        <li className="nav-item">
                        <SearchList/>
                        </li>
                    </ul>
                </nav>
            </>
        )

    }

}

import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import SearchList from './searchList'
import './header.css'

export default class Header extends React.Component {


    loggedOut = <>
        <Link className="grid-link" to="/signup"><div className="grid-item">Sign Up
    </div></Link>

        <Link className="grid-link" to="/login"><div className="grid-item">Login
        </div></Link>
    </>

    loggedIn = <>
        <Link className="grid-link" to="/logout"><div className="grid-item">Logout</div></Link>
        <Link className='grid-link' to="/update"><div className="grid-item">Update Profile</div></Link>
        <Link className='grid-link' to="/mycars"> <div className="grid-item">My Cars</div></Link>
        <Link className='grid-link' to="/myfavorites"><div className="grid-item">My Favorites</div></Link>
    </>


    render() {
        return (
            <>
                <div className='carclub_header'>
                    <div>Car Club</div>
                </div>
                <div className="grid-container">
                    <Link className="grid-link" to="/"><div className="grid-item">Home</div></Link>
                    <AuthContext.Consumer>
                        {
                            user => {
                                if (user) return (
                                    <>

                                        {this.loggedIn}
                                        <div className="grid-item"><Link to='/mycars'className='grid-link'>{user.username}</Link></div>
                                        <div className="grid-item"><img className='profile_pic' src={user.picture} alt={user.picture}></img></div>

                                    </>
                                )
                                else return this.loggedOut
                            }
                        }
                    </AuthContext.Consumer>
                    <div className="grid-item">

                    </div>

                </div>

                <SearchList />

            </>
        )

    }

}

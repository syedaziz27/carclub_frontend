import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class Favorites extends React.Component {

    state = {
        email: null,
        favorites: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Axios.get(`http://localhost:3004/user/favorites/${user.email}`)
                    .then(res => this.setState({email: user.email, favorites: res.data.data}, () => console.log(this.state)))
                    .catch(err => console.log(err))
            }
        })
    }

    Favorites = () => {
        if (!this.state.email) return <h1>Please Sign In</h1>
        return this.state.favorites.map((e, i) => {
            return (
                <Link className='favorite_car' to={`/vehicle/${e.carid}`} key={i}> 
                    <img src={e.frontimg}></img>
                    <h3>{e.year} {e.make} {e.model}</h3>
                </Link>
            )
        })
    }


    render() {
        return (
            <div className='favorites_container'>
            <this.Favorites/>

            
            
            </div>
        )
    }
}
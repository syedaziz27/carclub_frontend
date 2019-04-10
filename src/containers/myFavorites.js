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
                    .then(res => this.setState({ email: user.email, favorites: res.data.data }, () => console.log(this.state)))
                    .catch(err => console.log(err))
            }
        })
    }

    Favorites = () => {
        if (!this.state.email) return <h1>Please Sign In</h1>
        return this.state.favorites.map((e, i) => {
            return (
                <div className='each-car' key={i}>
                    <Link to={`/vehicle/${e.carid}`} className='name-link'>
                        <div className='car_container' key={i} carid={e.carid}>
                            <div className='img_container'><img src={e.frontimg} alt={e.frontimg} style={{maxHeight: '20vh'}}></img></div>
                            <h3><span>{e.year}</span> {e.make} {e.model}</h3>
                        </div>
                    </Link>
                </div>
            )


        })
    }


    render() {
        return (
            <div className='my-carlist'>
            <div className='col-left'></div>
            <div className='col-center'>
                <h2 style={{color:'white'}}>Your Favorites</h2>
                <this.Favorites />
            </div>
            <div className='col-right'></div>
            
        </div>
        )
    }
}
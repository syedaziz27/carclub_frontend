import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class MyCars extends React.Component {

    state = {
        email: null,
        myCars: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // this.setState({ email: user.email });
                this.getCars(user.email)
            }
            else {
                console.log('hello')
            }
        })
    }

    getCars = async (email) => {
        const data = await Axios.get(`http://localhost:3004/car/mycars/${email}`)
        const myCars = data.data.data;
        this.setState({email, myCars})

    }

    Cars = () => {
        if (this.state.myCars == null) return <></>
        return this.state.myCars.map((e, i) => {
            console.log(e)
            return (
                <Link key={i} to={`/vehicle/${e.id}`}>
                    <div className='car_container' key={i} carid={e.id}>
                        <div className='img_container'><img src={e.frontimg} alt={e.frontimg}></img></div>
                        <h3>{e.make} {e.model}</h3>
                    </div>
                </Link>
            )
        })
    } 

    render() { 
                return <AuthContext.Consumer>
                     {
                        user => {
                            if (user) return (
                                <>
                                    <div>{user.username}'s Car List</div>
                                    <br></br>
                                    <this.Cars />
                                </>
                            )
                            else return (
                                <h3>Please Login to See Your Cars</h3>
                            )
                        }
                    }

                </AuthContext.Consumer>
    }
}
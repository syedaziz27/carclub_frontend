import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';

export default class MyCars extends React.Component {

    state = {
        email: null,
        myCars: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
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
        this.setState({email, myCars: data.data.data}, () => console.log(this.state.myCars))
        
    }

    cars = this.state.myCars.map((e, i) => {
        return(
            <div className='car_container' key={i}>
            <div className='img_container'><img src={e.frontimg}></img></div>
            </div>
        )
    })

    render() {
      
        return (
            <>
                <AuthContext.Consumer>
                    {
                        user => {
                            if (user) return (
                                <>
                                    <div>{user.username}'s Car List</div>
                                    <br></br>
                                </>
                            )
                            else return (
                                <h3>Please Login to See Your Cars</h3>
                            )
                        }
                    }
                </AuthContext.Consumer>
            </>


        )
    }
}
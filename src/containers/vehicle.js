import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';
import {Button} from 'reactstrap';

export default class Vehilcle extends React.Component {

    state = {
        make: null,
        model: null,
        color: null,
        year: null,
        mileage: null,
        price: null,
        frontimg: null,
        carid: null,
        owneremail: null,
        userEmail: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ useremail: user.email }, () => console.log(this.state))
            }
            else {
                console.log('hello')
            }
        })

        const id = this.props.match.params.vehicleID
        console.log(id)
        Axios.get(`http://localhost:3004/car/${id}`)
            .then(data => {
                console.log(data.data.data)
                const {make, model, color, year, mileage, price, frontimg, id, owneremail} = data.data.data
                this.setState({make, model, color, year, mileage, price, frontimg, carid:id, owneremail}, () => console.log(this.state))
            })
            .catch(err => console.log(err))
    }

    favButton = (e) => {
        console.log('added to favs');
        if (!this.state.useremail) {
            alert('Please login to add to favorites.')
    }
        if (this.state.owneremail === this.state.useremail) {
            alert('this is your car lol');
            return;
        }
        const {carid, useremail, make, model, year, mileage, price, color, frontimg} = this.state;
        Axios.post('http://localhost:3004/car/addfav', {carid, make, model, color, year, price, useremail, mileage, frontimg})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <div className='car_container'>
                <h1>{this.state.year} {this.state.make} {this.state.model}</h1>
                <img src={this.state.frontimg} alt={this.state.frontimg}></img>
                <Button onClick={this.favButton}>Add to Favorites</Button>
            </div>
        )
    }
}
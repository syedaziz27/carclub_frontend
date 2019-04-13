import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';
import { Button } from 'reactstrap';
import './vehicle.css'

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
        userEmail: null,
        purchased: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ userEmail: user.email }, () => console.log(this.state))
            }
            else {
                console.log('hello')
            }
        })

        const id = this.props.match.params.vehicleID
        console.log(id)
        Axios.get(`https://carclub-backend.herokuapp.com/car/${id}`)
            .then(data => {
                console.log(data.data.data)
                const { make, model, color, year, mileage, price, frontimg, id, owneremail, purchased } = data.data.data
                this.setState({ make, model, color, year, mileage, price, frontimg, carid: id, owneremail, purchased }, () => console.log(this.state))
            })
            .catch(err => console.log(err))
    }

    favButton = (e) => {
        console.log('added to favs');
        if (!this.state.userEmail) {
            alert('Please login to add to favorites.');
            return;
        }
        if (this.state.owneremail === this.state.userEmail) {
            alert('this is your car lol');
            return;
        }
        const { carid, userEmail, make, model, year, mileage, price, color, frontimg } = this.state;
        Axios.post('https://carclub-backend.herokuapp.com/car/addfav', { carid, make, model, color, year, price, userEmail, mileage, frontimg })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    thousands_separators = (num) => {
        const num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    buyButton = (e) => {
        if (!this.state.userEmail) {
            alert('Please login to purchase.');
            return;
        }
        if (this.state.owneremail === this.state.userEmail) {
            alert('this is your car lol');
            return;
        }

        const {make, model, color, year, mileage, price, frontimg, carid, userEmail, purchased} = this.state;

        Axios.put('https://carclub-backend.herokuapp.com/car/newowner', {userEmail, carid})
            .then(data => console.log(data))
            .then(() => {
                const sellerEmail = this.state.owneremail;
                const buyerEmail = this.state.userEmail;

                Axios.post('https://carclub-backend.herokuapp.com/car/transaction', {make, model, color, year, mileage, price, frontimg, carid, buyerEmail, sellerEmail, purchased} )
            })
            .then((data) => console.log(data))
            .then(() => alert('Congratulations on Your Purchase!'))
            .then(() => this.setState({purchased: true}))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className='profile-container'>
                <div></div>
                <div>
                    <h1 className='header' style={{ color: 'white' }}>{this.state.year} {this.state.make} {this.state.model}</h1>
                    <div><img src={this.state.frontimg} alt={this.state.frontimg} className='frontimg'></img></div>
                    <div><Button className='btn-light' onClick={this.favButton} style={{ margin: '10px' }}>Add to Favorites</Button>
                        {
                            !this.state.purchased ?
                            <Button className='btn-light' onClick={this.buyButton} style={{ margin: '10px' }}>Purchase</Button>
                            :
                            <Button className='btn-danger' onClick={() => alert('Sorry, car has been sold')} style={{ margin: '10px' }}>SOLD</Button>
                        }
                       
                    </div>
                    <div>
                        <p style={{ color: 'white', fontSize: '2vw' }}>This is a {this.state.color} {this.state.year} {this.state.make} {this.state.model}. It has {this.state.mileage} mile(s). The asking price is ${this.state.price}. </p>
                    </div>
                </div>


                <div></div>
            </div>
        )
    }
}
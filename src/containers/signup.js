import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

import ServiceWorker from '../services/services';
import './signup.css'

export default class Signup extends React.Component {

  state = {
    email: '',
    password: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    picture: '...',
    uid: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, city, state, zip } = this.state;

    if (email === '' || password === '' || username === '' || city === '' || state === '' || zip === '') {
      alert('missing inputs');
      return;
    }
    
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     console.log('Returns: ', response.user.uid);
    //     return response.user.uid;
    //   })
    //   .then((uid) => {
    //     console.log('HELLLOOOOOOOOOO')
    //     return Axios.post(`http://localhost:3004/user/signup`, {
    //       username,
    //       email,
    //       city,
    //       state,
    //       zip,
    //       uid
    //     })
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     console.log(this.state)
    //     this.setState({email, password, username, city, state, zip})
    //   })
    //   .catch(err => {
    //     const { message } = err;
    //     this.setState({ error: message });
    //   })

      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uid = response.user.uid;
      const post = await ServiceWorker.createUser(username, email,city, state, zip, uid)

      console.log(post);
      await this.setState({email, password, username, city, state, zip})

  }


  render() {
    const { email, password, username, city, state, zip, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayForm = <>
      <h1>Sign Up</h1>
      {displayError}
      <form>
        <div className="form-group">
          <label>Username</label>
          <input className="form-control" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input className="form-control" placeholder="Enter City Name" name="city" value={city} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input className="form-control" placeholder="Enter State" name="state" value={state} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Zip</label>
          <input className="form-control" placeholder="Enter Zip Code" name="zip" value={zip} onChange={this.handleChange} />
        </div>
        <label>Your Photo</label>
        <br></br>
        <div><button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button></div>
      </form>
    </>;

    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return <Redirect to='/' />
            } else {
              return displayForm;
            }
          }
        }
      </AuthContext.Consumer>
    );
  }
}


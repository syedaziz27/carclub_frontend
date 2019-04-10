import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import './login.css';
import img from '../images/gtr_taillights.jpg';

export default class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        // this.setState({ error: message });
          alert('Login Info is Incorrect!')
          return;
      })
  }


  render() {
    const { email, password } = this.state;

    const displayForm =
      <div className='login-grid'>
        <img src={img} className='login-img'></img>
        <h1 className='login'>Login to Your Account</h1>
        <div className='login-items'>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-light" onClick={this.handleSubmit}>Login</button>
          </form>
        </div>

      </div>;

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
    )
  }
}

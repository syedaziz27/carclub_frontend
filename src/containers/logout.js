import React from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';


export default class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    return <h1>Logging out...</h1>
  }
}
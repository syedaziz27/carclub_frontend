import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import './home.css'

class Home extends Component {
    render() {
        return (
            <>
            <AuthContext.Consumer>
            {
              (user) => {
                if (user) {
                  return (
                    <>
                      <h2>Welcome back, {user.email}</h2>
                      <h4>Your ID is: {user.uid}</h4>
                    </>
                  )
                } else {
                  return (
                    <>
                        <h2>You are not logged in.</h2>
                    </>
                  ) 
                }
              } 
            }

          </AuthContext.Consumer>
          <img className='home_img' src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/one-off/centenario/slider/centenario.jpg' alt=''/>
          </>
        )
    }
}

export default Home;
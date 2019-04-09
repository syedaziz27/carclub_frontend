import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import WelcomePage from './welcomePage';
import img from '../images/maserati2.jpg'
import './home.css'


class Home extends Component {

    render() {
        return (
            <div className='home-container'>
            <AuthContext.Consumer>
            {
              (user) => {
                if (user) {
                  return (
                    <div className='login-grid'>
                      <h2 className='welcome'>Welcome back, {user.username}</h2>
                     <img className='home-img' src={img} alt=''/>
                    </div>
                  )
                } else {
                  return (
                    <>
                        <WelcomePage/>
                    </>
                  ) 
                }
              } 
            }

          </AuthContext.Consumer>
          
          </div>
        )
    }
}

export default Home;
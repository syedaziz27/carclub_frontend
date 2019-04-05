import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import firebase from './firebase';

import Header from './components/header';
import Home from './containers/home';
import Login from './containers/login';
import Logout from './containers/logout';
import Signup from './containers/signup';
import Search from './containers/search';
import Update from './containers/update';
import Error404 from './components/error404';

import ServiceWorker from './services/services';

import AuthContext from './contexts/auth';

class App extends Component {

    state = {
      user: null
    }

    componentDidMount() {
      this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // let user1 = user;
          
          // console.log(user1)
          const {email} = user;
          console.log(email)

          ServiceWorker.getUserData(email)
           .then((data) => {
             console.log(data)

           })
           .then(() => this.setState({ user }))  
           .catch(err => {
             console.log(err)
           })
          this.setState({user})
        }
        else {
          this.setState({ user: null })
        }
      })
    }
  
    componentWillUnmount() {
      this.unsubscribe()
    }


  render() {
    return (
      <HashRouter>
          <AuthContext.Provider value={this.state.user}>
            <Route path='/' component={Header}/>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
              <Route path='/search/:make/:model' exact component={ Search}/>
              <Route path='/update' exact component={Update}></Route>
              <Route component={ Error404 } />
            </Switch>
          </AuthContext.Provider>
      </HashRouter>
    )
  }
}

export default App;
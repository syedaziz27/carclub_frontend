import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const config = {
    apiKey: "AIzaSyBQE1rZaeVcLdhjLDhfy2OP5vg9wZJUPP4",
    authDomain: "carclub-de5aa.firebaseapp.com",
    databaseURL: "https://carclub-de5aa.firebaseio.com",
    projectId: "carclub-de5aa",
    storageBucket: "carclub-de5aa.appspot.com",
    messagingSenderId: "575870150744"
};

export default class Update extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
                this.setState({ email: user.email }, () => console.log(this.state))
            }
            else {
                console.log('hello')
            }
        })
    }

    storePhoto = async (e) => {
        const firstFile = e.target.files[0];

        const root = firebase.storage().ref();
        const newImage = root.child(`${this.state.email}/${firstFile.name}`);

        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            console.log(url);

            const data = await Axios.put('http://localhost:3004/update', {picture: url, email: this.state.email})
            console.log(data);

        }

        catch (err) {
            console.log(err)
        }
    }

    storeCarPics = async (e) => {
        const files = e.target.files;
        console.log(files)
        const root = firebase.storage().ref();

        for (let i = 0; i < files.length; i++) {
            const carPics = root.child(`${this.state.email}/car/${files[i]}`);
    
            try {
                const snapshot = await carPics.put(files[i]);
                const url = await snapshot.ref.getDownloadURL();
                console.log(url)
            }
    
            catch (err) {
                console.log(err)
            }
        }
  
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                            <div><h1>Update your profile, {this.state.email} </h1>
                                <div className='container'>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" onChange={this.storePhoto} />
                                            <label className="custom-file-label">Upload Profile Image</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className='container'>
                                
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" multiple onChange={this.storeCarPics} />
                                            <label className="custom-file-label">upload vehicle images</label>
                                        </div>
                                    </div>
                                </div>
       

                            </>
                            )
                        } else {
                            return <>You are not logged in</>
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}
import React from 'react';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';

export default class Update extends React.Component {

    state = {
        email: null,
        color: null,
        make: null,
        model: null,
        picture: null
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
        const newImage = root.child(`${this.state.email}/profilepic/${firstFile.name}`);

        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            console.log(url);
            const email = this.state.email;
            const picture = url;

            const data = await Axios.put('http://localhost:3004/user/photo', { email, picture })
            console.log(data);
            document.location.reload()
        }

        catch (err) {
            console.log(err)
        }
    }

    uploadFrontPhoto = async (e) => {
        const file = e.target.files[0];

        const root = firebase.storage().ref();
        const pic = root.child(`${this.state.email}/car/${file}`);

        try {
            const snapshot = await pic.put(file)
            const url = await snapshot.ref.getDownloadURL();
            console.log(url);
            const email = this.state.email;
            const picture = url;

            this.setState({ picture }, () => console.log(this.state))
        }

        catch (err) {
            console.log(err);
        }
    }

    typeMake = (e) => {
        console.log(e.target.value)
        this.setState({ make: e.target.value }, () => console.log(this.state))
    }

    typeModel = (e) => {
        console.log(e.target.value)
        this.setState({ model: e.target.value }, () => console.log(this.state))
    }

    typeColor = (e) => {
        console.log(e.target.value)
        this.setState({ color: e.target.value }, () => console.log(this.state))
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, color, make, model, picture } = this.state;

        if (!email || !make || !model || !color || !picture) {
            alert('missing inputs');
            return;
        }

        else {
            const data = await Axios.post('http://localhost:3004/car/front', { email, picture, make, model, color })
            console.log(data);

        }

        // firebase.auth().createUserWithEmailAndPassword(email, password)
        //   .then((response) => {
        //     console.log('Returns: ', response.user.uid);
        //     return response.user.uid;
        //   })
        //   .then((uid) => {
        //     console.log('HELLLOOOOOOOOOO')
        //     return ServiceWorker.createUser(username, email, city, state, zip, uid);
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

    }


    // storeCarPics = async (e) => {
    //     const files = e.target.files;
    //     console.log(files)
    //     const root = firebase.storage().ref();

    //     for (let i = 0; i < files.length; i++) {
    //         const carPics = root.child(`${this.state.email}/car/${files[i]}`);

    //         try {
    //             const snapshot = await carPics.put(files[i]);
    //             const url = await snapshot.ref.getDownloadURL();
    //             console.log(url)
    //         }

    //         catch (err) {
    //             console.log(err)
    //         }
    //     }

    // }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <div><h1>Update your profile, {user.username} </h1>
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
                                                <input type="file" className="custom-file-input" multiple onChange={this.uploadFrontPhoto} />
                                                <label className="custom-file-label">upload vehicle images</label>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">Make</span>
                                                </div>
                                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.typeMake} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">Model</span>
                                                </div>
                                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.typeModel} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroup-sizing-default">Color</span>
                                                </div>
                                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.typeColor} />
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div><button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Add Car</button></div>


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
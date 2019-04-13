import React from 'react';
import {Redirect} from 'react-router-dom';
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import Axios from 'axios';
import placeholder from '../images/placeholder.jpeg';
import './update.css';
import uid from 'uid';

export default class Update extends React.Component {

    state = {
        email: null,
        color: null,
        make: null,
        model: null,
        year: null,
        picture: null,
        mileage: null,
        price: null,
        placeholder,
        fb_link:null,
        carImage: null,
        updated: false
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
        const preview = URL.createObjectURL(e.target.files[0]);
        if (preview === 'undefined') return;
        this.setState({placeholder: preview, fb_link: firstFile});

        const root = firebase.storage().ref();
        const newImage = root.child(`${this.state.email}/profilepic/${firstFile.name}`);

        try {
            const snapshot = await newImage.put(firstFile);
            const url = await snapshot.ref.getDownloadURL();
            console.log(url);
            const email = this.state.email;
            const picture = url;

            const data = await Axios.put('https://carclub-backend.herokuapp.com/user/photo', { email, picture })
            console.log(data);
        //     document.location.reload()
        }

        catch (err) {
            console.log(err)
        }
    }

    uploadFrontPhoto = async (e) => {
        const file = e.target.files[0];
        const preview = URL.createObjectURL(e.target.files[0]);
        if (preview === 'undefined') return;
        this.setState({carImage: preview});

        const id = uid();
        const root = firebase.storage().ref();
        const pic = root.child(`${this.state.email}/car/${file.name}-${id}`);

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
        console.log(e.target.value);
        this.setState({ make: e.target.value }, () => console.log(this.state))
    }

    typeModel = (e) => {
        console.log(e.target.value);
        this.setState({ model: e.target.value }, () => console.log(this.state))
    }

    typeColor = (e) => {
        console.log(e.target.value);
        this.setState({ color: e.target.value }, () => console.log(this.state))
    }

    typeYear = (e) => {
        console.log(e.target.value);
        this.setState({ year: e.target.value }, () => console.log(this.state))
    }
    typeMiles = (e) => {
        this.setState({ mileage: e.target.value })
    }
    typePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, color, make, model, picture, year, price, mileage } = this.state;

        if (!email || !make || !model || !color || !picture || !year || !price || !mileage) {
            alert('missing inputs');
            return;
        }

        else {
            const data = await Axios.post('https://carclub-backend.herokuapp.com/car/front', { email, picture, make, model, color, year, mileage, price });
            this.setState({updated: true});
            alert('Updated Successfully');

            console.log(data);

        }

    }


    storeCarPics = async (e) => {
        const files = e.target.files;
        console.log(files)
        this.setState({carPics: e.target.files}, ()=> console.log(this.state))
        // const root = firebase.storage().ref();

        // for (let i = 0; i < files.length; i++) {
        //     const carPics = root.child(`${this.state.email}/car/${files[i].name}`);

        //     try {
        //         const snapshot = await carPics.put(files[i]);
        //         const url = await snapshot.ref.getDownloadURL();
        //         console.log(url)
        //     }

        //     catch (err) {
        //         console.log(err)
        //     }
        // }

    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            if (this.state.updated) return <Redirect to='/'></Redirect>
                            return (
                                <div className='update-container'>
                                      <div className="img-container">
                                        <img className='profile-img' src={this.state.carImage}></img>
                                    </div>
                                    <div>
                                    <h1>Update your profile, {user.username} </h1>
                                    <br></br>
                                    <h3>Upload Your Profile Image</h3>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange={this.storePhoto} />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                        </div>
                                    </div>
                                    <h3>Upload Car Images</h3>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" multiple onChange={this.uploadFrontPhoto} />
                                        <label className="custom-file-label">Upload Vehicle Images</label>
                                    </div>
                                    <div className="form-group">
                                        <label>Make</label>
                                        <input className="form-control" placeholder="Enter Make" onChange={this.typeMake} />
                                    </div>
                                    <div className="form-group">
                                        <label>Model</label>
                                        <input className="form-control" placeholder="Enter Model" onChange={this.typeModel}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Color</label>
                                        <input className="form-control" placeholder="Enter Color" onChange={this.typeColor}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mileage</label>
                                        <input className="form-control" placeholder="Enter Mileage" onChange={this.typeMiles}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Year</label>
                                        <input className="form-control" placeholder="Enter Year" onChange={this.typeYear}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input className="form-control" placeholder="Enter Price" onChange={this.typePrice}/>
                                    </div>
                                    <div><button type="submit" className="btn btn-light" onClick={this.handleSubmit}>Add Car</button></div>
                                    </div>
                                    <div className="img-container">
                                        <img className='profile-img' src={this.state.placeholder}></img>
                                    </div>

                                </div>
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
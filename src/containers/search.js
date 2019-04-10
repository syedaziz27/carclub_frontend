import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            make: null,
            model: null,
            cars: null
        }
    }

    componentDidMount() {
        const make = this.props.match.params.make;
        const model = this.props.match.params.model;

        Axios.get(`http://localhost:3004/car/search/${make}/${model}`)
            .then(data => {
                this.setState({make, model, cars:data.data.data}, () => console.log(this.state))
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.make !== this.props.match.params.make || prevProps.match.params.model !== this.props.match.params.model) {
            // this.setState({make: this.props.match.params.make, model:this.props.match.params.model, cars:null});
            const make = this.props.match.params.make;
            const model = this.props.match.params.model;
            Axios.get(`http://localhost:3004/car/search/${make}/${model}`)
            .then(data => {
                this.setState({make, model, cars:data.data.data}, () => console.log(this.state.cars))
            })
            .catch(err => console.log(err))
        }
    }

    Cars = () => {
        if (this.state.cars == null) return <><h3>None For Sale</h3></>
        return this.state.cars.map((e, i) => {
            console.log(e)
            return (
                <div className='each-car' key={i}>
                <Link  to={`/vehicle/${e.id}`} className='name-link'>
       <div className='car_container' key={i} carid={e.id}>
           <div className='img_container'><img src={e.frontimg} alt={e.frontimg} style={{maxWidth:'300px', maxHeight: '150px',}}></img></div>
           <h3><span>{e.year}</span> {e.make} {e.model}</h3>
       </div>
   </Link>
   </div>
            )
        })
    } 

    render () {
        return(
            <div className='my-carlist'>
            <div className='col-left'></div>
            <div className='col-center'>
                <this.Cars />
            </div>
            <div className='col-right'></div>
            
        </div>
          
        )
  
    }
}

export default Search;
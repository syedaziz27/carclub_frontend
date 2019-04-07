import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
                this.setState({make, model, cars:data.data.data}, () => console.log(this.state))
            })
            .catch(err => console.log(err))
        }
    }

    Cars = () => {
        if (this.state.cars == null) return <></>
        return this.state.cars.map((e, i) => {
            console.log(e)
            return (
                <Link key={i} to={`/vehicle/${e.id}`}>
                    <div className='car_container' carid={e.id} onClick={() => console.log('clicked')}>
                        <div className='img_container'><img src={e.frontimg} alt={e.frontimg}></img></div>
                        <h3>{e.make} {e.model}</h3>
                    </div>
                </Link>
             
            )
        })
    } 

    render () {
        return(
            <>
              <div>{this.state.make}{this.state.model}</div>
              <br></br>
              <div className='carList'>
                <this.Cars/>
              </div>
            </>
          
        )
    }
}

export default Search;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cars from '../cars';
import './searchList.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';

class SearchList extends Component {
    constructor(props) {
        super(props)

        this.toggleMake = this.toggleMake.bind(this);
        this.toggleModel = this.toggleModel.bind(this);

        this.state = {
            cars: cars,
            currentMake: null,
            currentModel: null,
            dropdownOpenMake: false,
            dropdownOpenModel: false
        };
    }

    toggleMake() {
        this.setState(prevState => ({
            dropdownOpenMake: !prevState.dropdownOpenMake
        }));
    }

    toggleModel() {
        this.setState(prevState => ({
            dropdownOpenModel: !prevState.dropdownOpenModel
        }));
    }

    selectedMake = (e) => {
        if (this.state.currentModel) this.setState({ currentModel: null })
        const make = e.target.innerText;
        this.setState({
            currentMake: make
        }, () => console.log(this.state.currentMake));
    }

    getModels = () => {
        let models = [];
        if (this.state.currentMake === null) return
        else {
            for (let i = 0; i < this.state.cars.length; i++) {
                if (this.state.currentMake === this.state.cars[i].make) {
                    models = this.state.cars[i].model
                }
            }
        }
        return (
            <>{
                models.map((e, i) => {
                    return (
                        <DropdownItem key={i}>
                            <div className='model' key={i} onClick={this.selectedModel}>{e}</div>
                        </DropdownItem>
                        
                    )
                })
            }</>
        )
    }

    selectedModel = (e) => {
        this.setState({ currentModel: e.target.innerText }, () => console.log(this.state))
    }

    clickedSearchWithoutInfo = () => {
        alert('Please Select Both Make and Model')
    }

    clickedSearch = (e) => {
        this.setState({ currentMake: null, currentModel: null })
    }

    checkMake = () => {
        if (!this.state.currentMake) {
            return (
                'Select Make'
            )
        }
        else {
            return (
                <div>{this.state.currentMake}</div>
            )
        }
    }

    checkModel = () => {
        if (!this.state.currentModel) {
            return (
                'Select Model'
            )
        }
        else {
            return (
                <div>{this.state.currentModel}</div>
            )
        }
    }

    render() {
        return (
            <div className='srch-grid'>
            <div></div>

                <ButtonGroup>
                    <Dropdown isOpen={this.state.dropdownOpenMake} toggle={this.toggleMake}>
                        <DropdownToggle caret size="sm">Make</DropdownToggle>
                        <DropdownMenu>
                            
                                <div className='make_container'>
                                    {
                                        this.state.cars.map((e, i) => {
                                            return (
                                                <DropdownItem key={i}>
                                                <div className='make' onClick={this.selectedMake} >{e.make}</div>
                                                </DropdownItem>
                                            )
                                        })
                                    }
                                </div>
                            
                        </DropdownMenu>
                    </Dropdown>
                   
                </ButtonGroup>
                <div className='makeName'>{this.checkMake()}</div>
                <ButtonGroup>
                    <Dropdown isOpen={this.state.dropdownOpenModel} toggle={this.toggleModel}>
                        <DropdownToggle caret size="sm">Model</DropdownToggle>
                        <DropdownMenu>
                            
                                <div className='models_container'>
                                    {this.getModels()}
                                </div>
                    
                        </DropdownMenu>
                    </Dropdown>
               
                </ButtonGroup>
                <div className='modelName'>{this.checkModel()}</div>
                <div>
                    {
                        this.state.currentMake && this.state.currentModel ?
                            <Link to={`/search/${this.state.currentMake}/${this.state.currentModel}`}><div className='srch-btn' size="sm" onClick={this.clickedSearch}>Search</div></Link>
                            :
                            <div className='srch-btn' size="sm" onClick={this.clickedSearchWithoutInfo}>Search</div>
                    }

                </div>


            </div>
        );
    }
}

export default SearchList;
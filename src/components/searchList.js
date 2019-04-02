import React, { Component } from 'react';
import cars from '../cars';
import './searchList.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';

class SearchList extends Component {
    constructor(props) {
        super(props);

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
        const make = e.target.innerText;
        this.setState({
            currentMake: make
        }, () => console.log(this.state.currentMake));
    }

    getModels = () => {
        let models = [];
        if (this.state.currentMake === null) console.log('efasfsa')
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
                        <div className='model' key={i} onClick={this.selectedModel}>{e}</div>
                    )
                })
            }</>
        )
    }

    selectedModel = (e) => {
        this.setState({currentModel: e.target.innerText}, ()=> console.log(this.state))
    }

    render() {
        return (
            <>
                <ButtonGroup> 
                    <Dropdown isOpen={this.state.dropdownOpenMake} toggle={this.toggleMake}>
                    <DropdownToggle caret size="sm">Make</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <div className='make_container'>
                                {
                                    this.state.cars.map((e, i) => {
                                        return (
                                            <div className='make' onClick={this.selectedMake} key={i}>{e.make}</div>
                                        )
                                    })
                                }
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <div className='makeName'>{this.state.currentMake}</div>
                    <Dropdown isOpen={this.state.dropdownOpenModel} toggle={this.toggleModel}>
                        <DropdownToggle caret size="sm">Model</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <div className='models_container'>
                                    {this.getModels()}
                                </div>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className='modelName'>{this.state.currentModel}</div>
                    <Button color="primary" size="sm">Search</Button>
                </ButtonGroup>
            </>
        );
    }
}

export default SearchList;
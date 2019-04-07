import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cars from '../cars';
import './searchList.css'
import QueryContext from '../contexts/query';
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
        if (this.state.currentModel) this.setState({currentModel: null})
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
                        <div className='model' key={i} onClick={this.selectedModel}>{e}</div>
                    )
                })
            }</>
        )
    }

    selectedModel = (e) => {
        this.setState({currentModel: e.target.innerText}, ()=> console.log(this.state))
    }

    clickedSearchWithoutInfo = () => {
      alert('Please Select Make and Model')
    }

    clickedSearch = (e) => {
        const make = e.target.parentNode.parentNode.children[1];
        const model = e.target.parentNode.parentNode.children[3];

        make.innerText = '';
        model.innerText = ''
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
                    {
                        this.state.currentMake && this.state.currentModel ?
                        <Link to={`/search/${this.state.currentMake}/${this.state.currentModel}`}><Button color="primary" size="sm" onClick={this.clickedSearch}>Search</Button></Link>
                        :
                        <Button color="primary" size="sm" onClick={this.clickedSearchWithoutInfo}>Search</Button>
                    }
                </ButtonGroup>
            </>
        );
    }
}

export default SearchList;
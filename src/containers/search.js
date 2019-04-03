import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            make: null,
            model: null
        }
    }

    componentDidMount() {
       this.setState({make: this.props.match.params.make, model: this.props.match.params.model})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.make !== this.props.match.params.make || prevProps.match.params.model !== this.props.match.params.model) {
            this.setState({make: this.props.match.params.make, model:this.props.match.params.model})
        }
    }

    render () {
        return(
            <div>{this.state.make}{this.state.model}</div>
        )
    }
}

export default Search;
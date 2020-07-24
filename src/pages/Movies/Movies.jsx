import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar';

export class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = { moviesList: [], search: "" };

        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSearch(event) { 
        this.setState({ search: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.history.push('/explanationRate');
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        )
    }
}

export default Movies
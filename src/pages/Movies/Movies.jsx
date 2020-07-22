import React, { Component } from 'react'

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
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        Title
                        <input value={this.state.search} onChange={this.handleChangeSearch} type="text" />
                    </label>
                    <input type="submit" value="Search"/>
                </form>
                <div>
                    {
                        this.state.moviesList.map((movie, index) => (
                            <div>
                                <div>{ movie.title }</div>
                                <div>{ movie.image }</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Movies
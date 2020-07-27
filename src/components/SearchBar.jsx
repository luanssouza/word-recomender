import React from 'react';
import './searchbar.css';
import { Button } from 'react-bootstrap';

class SearchBar extends React.Component {

    state = {film: ''}

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.film)
    }

    render(){
        return  (
            <div>
                <h1 className="description"> To continue, please like at least 10 films that you have enjoyed from 2011 to 2016 </h1>
                <form onSubmit={this.onFormSubmit} className="form-inline">
                    <input id="search-input"
                        className="form-control search" 
                        type="text" 
                        placeholder="Search the name of a movie"
                        value={this.state.film} 
                        onChange={e => this.setState({film: e.target.value})} />

                    <Button type="submit" className="btn btn-primary btn-submit">
						SEARCH
					</Button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
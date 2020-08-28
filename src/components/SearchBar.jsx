import React from 'react';
import './searchbar.css';
import { Button } from 'react-bootstrap';

class SearchBar extends React.Component {

    state = {film: '', year: ''}

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.film, this.state.year)
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({
            year: value
        });
    }

    render(){
        return  (
            <div>
                <h1 className="description"> To continue, please like at least 5 films that you have enjoyed from 2000 to 2011 </h1>
                <form onSubmit={this.onFormSubmit} className="form-inline form-center">
                    <input id="search-input"
                        className="form-control search" 
                        type="text" 
                        placeholder="Search the name of a movie"
                        value={this.state.film} 
                        onChange={e => this.setState({film: e.target.value})} />
                   
                   <select className="form-control" onChange={(e) => this.handleChange(e)}>
                        <option value=''>Ano</option>
                        <option value='2000'>2000</option>
                        <option value='2001'>2001</option>
                        <option value='2002'>2002</option>
                        <option value='2003'>2003</option>
                        <option value='2004'>2004</option>
                        <option value='2005'>2005</option>
                        <option value='2006'>2006</option>
                        <option value='2007'>2007</option>
                        <option value='2008'>2008</option>
                        <option value='2009'>2009</option>
                        <option value='2010'>2010</option>
                        <option value='2011'>2011</option>
                        {/* <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option> */}
                    </select>
                    
                    <div>
                        <Button type="submit" className="btn btn-primary btn-submit search-btn">
                            SEARCH
                        </Button>
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;
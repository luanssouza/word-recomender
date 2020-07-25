import React, { Component } from 'react'
import Omdb from '../../services/Omdb'
import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';

export class Movies extends Component {

    state = {films: []}

    onSearchSubmit = async (film) => {
        const response = await Omdb.get( '', {
            params: {
                s: film 
            }
        });

        console.log(response.data.Search)
        this.setState({films: response.data.Search})
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList films={this.state.films}/>
            </div>
        )
    }
}

export default Movies
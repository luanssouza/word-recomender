import React, { Component } from 'react'
import Omdb from '../../services/Omdb'
import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';

export class Movies extends Component {

    state = {films: [], profile_films: []};

    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
    }

    onSearchSubmit = async (film) => {
        const response = await Omdb.get( '', {
            params: {
                s: film 
            }
        });

        // console.log(response.data.Search)
        this.setState({films: response.data.Search})
    }

    /**
     * Add a new movie to the profile itens, in case it was not yet added
     * 
     * @param {*} Title to be addded to the profile_itens
     */
    handler = (Title) => {
        if(!this.state.profile_films.includes(Title)){
            this.setState({
                profile_films:[...this.state.profile_films, Title]
            });
        }
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList handler = {this.handler} films={this.state.films}/>
            </div>
        )
    }
}

export default Movies
import React, { Component } from 'react'
import Omdb from '../../services/Omdb'
import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';
import ProfileList from '../../components/ProfileList';

export class Movies extends Component {

    state = {films: [], profile_films: []};

    constructor(props){
        super(props);
        this.findFilmByImdbId = this.findFilmByImdbId.bind(this);
        this.handler = this.handler.bind(this);
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

    findFilmByImdbId = (imbd_id) => {
        for(var i = 0; i < this.state.profile_films.length; i++){
            const f = this.state.profile_films[i];
            if(f.imdbID === imbd_id){
                return true;
            }
        }
        
        return false;
    }

    /**
     * Add a new movie to the profile itens, in case it was not yet added
     * 
     * @param {*} Title to be addded to the profile_itens
     */
    handler = (imbd_id, url, title, year) => {
        if(!this.findFilmByImdbId(imbd_id)){
            var new_film = {
                imdbID: imbd_id,
                Poster: url,
                Title: title,
                Year: year
            }
            this.setState({
                profile_films:[...this.state.profile_films, new_film]
            });
        }
    }

    render() {
        return (
            <div>
                <ProfileList pro_list={this.state.profile_films}></ProfileList>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList handler = {this.handler} films={this.state.films}/>
            </div>
        )
    }
}

export default Movies
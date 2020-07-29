import React, { Component } from 'react'
import Omdb from '../../services/Omdb'
import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';
import ProfileList from '../../components/ProfileList';
import Next from '../../components/Next';

export class Movies extends Component {

    state = {films: [], profile_films: [], next: true};

    constructor(props){
        super(props);
        this.findFilmByImdbId = this.findFilmByImdbId.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.removeMovie = this.removeMovie.bind(this);
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
                return i;
            }
        }

        return -1;
    }

    /**
     * Add a new movie to the profile itens, in case it was not yet added
     * 
     * @param {*} Title to be addded to the profile_itens
     */
    addMovie = (imbd_id, url, title, year) => {
        // console.log("addMovie");
        if(this.findFilmByImdbId(imbd_id) < 0){
            var new_film = {
                imdbID: imbd_id,
                Poster: url,
                Title: title,
                Year: year
            }
            this.setState({
                profile_films:[...this.state.profile_films, new_film]
            });

            if(this.state.profile_films.length + 1 >= 10){
                this.setState({
                    next: false
                });
            }
        }
    }

    /**
     * Remove a movie from the profile itens, in case it was not yet added
     * 
     * @param {*} Title to be addded to the profile_itens
     */
    removeMovie = (imbd_id) => {
        // console.log("removeMovie");
        var index = this.findFilmByImdbId(imbd_id);
        var copy = this.state.profile_films.slice();
        copy.splice(index, 1);
        this.setState({
                profile_films: copy
        });

        if(this.state.profile_films.length - 1 < 10){
            this.setState({
                next: true
            });
        }
    }

    render() {
        return (
            <div>
                <ProfileList pro_list={this.state.profile_films} nfavs={this.state.profile_films.length} removeMovie={this.removeMovie}></ProfileList>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList addMovie={this.addMovie} films={this.state.films}/>
                <Next next={this.state.next}></Next>
            </div>
        )
    }
}

export default Movies
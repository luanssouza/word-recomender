import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar';
import ImageList from '../../components/ImageList';
import ProfileList from '../../components/ProfileList';
import Next from '../../components/Next';
import { connect } from 'react-redux';
import { getMoviesByTitle, getMovies, getRecommendation, getBaseline } from '../../services/MovieService';
import { ADD_MOVIES, ADD_RECOMMENDATION } from '../../store/actions/actionsConst';
import Loader from '../../components/loader/Loader';

export class Movies extends Component {

    state = {films: [], profile_films: [], next: true, process: false};

    constructor(props){
        super(props);
        this.findFilmByImdbId = this.findFilmByImdbId.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.removeMovie = this.removeMovie.bind(this);
        this.onInit();
    }

    onSearchSubmit = async (film, year) => {
        try{
            const response = await getMoviesByTitle(film, year);
            let search = response.data.Search;
            if (search)
                search.forEach( f => this.state.profile_films.forEach( p => f.imdbID === p.imdbID ? f.like = true : null ));
    
            // console.log(search)
            if(search.length > 0){
                this.setState({films: search, process: false})
            }
            else{
                this.setState({films: null, process: false})
            }
            
        }
        catch{
            this.setState({films: null, process: false})
        }
        
    }

    onInit = async () => {
        const response = await getMovies();
    
        // console.log(response.data.Search)
        this.setState({films: response.data});
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
    addMovie = (imbd_id, url, title, year, index) => {
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

            if(this.state.profile_films.length + 1 >= 5){
                this.setState({
                    next: false
                });
            }

            let aux = this.state.films;
            aux[index].like = true;
            this.setState({films: aux})
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

        let aux = this.state.films;
        aux.forEach( f => f.imdbID === imbd_id ? f.like = false : null );

        this.setState({
                profile_films: copy,
                films: aux
        });

        if(this.state.profile_films.length - 1 < 5){
            this.setState({
                next: true
            });
        }
    }

    handleNext = async (event) => {
        try{
            this.setState({process: true});

            let body = {
                user_id: this.props.user.user.id,
                movies: this.state.profile_films.map( x => x.imdbID)
            }

            this.setState({ next: true });

            let recommendations = await getRecommendation(body);
            let baseline = await getBaseline(body);

            recommendations = { ...recommendations.data, ...baseline.data };
            // console.log(recommendations)

            this.props.onSubmitMovies(body.movies);
            this.props.onSubmitRecommendation(recommendations);

            this.setState({process: false});

            this.props.history.push('/explanationRate');
        }
        catch{
            this.props.history.push('/error');
        }
        
    }

    render() {
        return (
            <div>
                <ProfileList pro_list={this.state.profile_films} nfavs={this.state.profile_films.length} removeMovie={this.removeMovie}></ProfileList>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList addMovie={this.addMovie} onInit={this.onInit} films={this.state.films}/>
                <Next next={this.state.next} onNext={this.handleNext}></Next>
                { this.state.process ? <Loader></Loader> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    movies: state.movies,
    recommendations: state.recommendations,
});

const mapDispatchToProps = (dispatch) => ({
    onSubmitMovies: (value) =>
        dispatch({ type: ADD_MOVIES, payload: value }),
    onSubmitRecommendation: (value) =>
        dispatch({ type: ADD_RECOMMENDATION, payload: value })
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
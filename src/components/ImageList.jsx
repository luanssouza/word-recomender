import React from 'react';
import './imagelist.css';

const ImageList = (props) => {

    try{
        const films = props.films.map(({ imdbID, Poster, Title, Year, like }, index) => {
            
            return  <div className="card"  key={imdbID} >
                        <div className="sec-title">
                            <h1 className="card-title">{Title}</h1>
                        </div>
                        <img className="card-img" src={Poster} alt={"Poster of the film " + Title + " from the year " + Year} />
                        <p className="ano">Year: {Year}</p>
                        <button type="button" className="btn btn-lg btn-primary btn-like" onClick={() => props.addMovie(imdbID, Poster, Title, Year, index)}>
                            <div className="inline">
                                { !like ? (
                                    <svg viewBox="0 0 16 16" className="bi bi-heart like-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg> 
                                ) : (
                                    <svg viewBox="0 0 16 16" className="bi bi-heart-fill like-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                )}
                                <span className="like-text">
                                    Like
                                </span>
                            </div>  
                        </button>
                    </div>
        });

        return <div className="image-list">{films}</div>;
    }
    catch(e){
        return  <div className="error">
                    <p>No film was found on search :(</p>
                    <p>Search for another movie from 2000 until 2011</p>
                    <button type="button" className="btn btn-lg btn-primary btn-like" onClick={() => props.onInit()}>
                        SEE SOME POPULAR MOVIES
                    </button>
                </div>;
    }
};

export default ImageList;
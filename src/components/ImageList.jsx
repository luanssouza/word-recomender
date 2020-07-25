import React from 'react';
import './imagelist.css';

const ImageList = (props) => {
    const films = props.films.map(({imdbID, Poster, Title, Year}) => {

        return <div className="card">
                    <h1 className="card-title">{Title}</h1>
                    <img className="card-img" key={imdbID} src={Poster} alt={"Poster of the film " + Title + " from the year " + Year} />
                    <p className="ano">Year: {Year}</p>
                    <button type="button" className="btn btn-lg btn-primary btn-home">
                            Gostei
                    </button>
                </div>
    });

return <div className="image-list">{films}</div>;
};

export default ImageList;
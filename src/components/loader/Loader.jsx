import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div>
        <div className="overlay-loader show"></div>
        <div className="spanner show">
          <div className="center-loader">
            <div className="loader"></div>
            Processing..
          </div>
        </div>
    </div>
  );
}

export default Loader;

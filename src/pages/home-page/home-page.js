import React, { useState, useEffect } from 'react';
import './home-page.scss';

function HomePage(props) {
  const [movieData, setMovieData] = useState({});


  useEffect(() => {
    setMovieData(props.location.state.movieData);
  }, [props]);

  return (
    <div className="container">
      <div className="row">
        Home Page : {movieData["Title"]}
      </div>
      <div className="row">
        <img src={movieData["Poster"]} alt=""/>
      </div>
    </div>
  );
}
  
export default HomePage;
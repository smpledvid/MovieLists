import React, { useState, useEffect } from 'react';
import './home-page.scss';

function HomePage(props) {
  const [movieData, setMovieData] = useState({});


  useEffect(() => {
    setMovieData(props.location.state.movieData);
    console.log(props.location.state.movieData);
  }, [props]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img src={movieData["Poster"]} alt=""/>
        </div> 
        <div className="col-lg-8">
          <div>Title: {movieData["Title"]}</div>
          <div>Rated: {movieData["Rated"]}</div>
          <div>Release Date: {movieData["Released"]}</div>
          <div>Actors : {movieData["Actors"]}</div>
          <div>Director: {movieData["Director"]}</div>
          <div>Plot: {movieData["Plot"]}</div>
          <div>Genre: {movieData["Genre"]}</div>

          { movieData["Ratings"] && 
            <div>
              Ratings: (IMDB : {movieData["Ratings"][0]['Value']}) / (Rotten Tomatoes : {movieData["Ratings"][1]['Value']}) / (Metacritic : {movieData["Ratings"][2]['Value']})  
            </div>
          }
        </div>
      </div>
    </div>
  );
}
  
export default HomePage;
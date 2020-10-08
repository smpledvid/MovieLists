import React, { useState, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import './home-page.scss';

function HomePage(props) {
  const [movieData, setMovieData] = useState({});


  useEffect(() => {
    setMovieData(props.location.state.movieData);
    console.log(props.location.state.movieData);
  }, [props]);

  function handleRatingsChipClick(ratingSource) {
    switch(ratingSource) {
      case 'imdb':
        window.open(`https://www.imdb.com/title/${movieData.imdbID}`, '_blank');
        break;
      case 'rotten tomatoes':
        break;
      case 'metacritic':
        break;
      default:
        break;
    }
  }

  return (
    <div className="container container-wrapper">
      <div className="row">
        <div className="col-lg-4">
          <img src={movieData["Poster"]} alt=""/>
        </div> 
        <div className="col-lg-8">
          <div className="title-wrapper">{movieData["Title"]}</div>
          <div>Rated: {movieData["Rated"]}</div>
          <div>Release Date: {movieData["Released"]}</div>
          <div>Actors : {movieData["Actors"]}</div>
          <div>Director: {movieData["Director"]}</div>
          <div>Plot: {movieData["Plot"]}</div>
          <div>Genre: {movieData["Genre"]}</div>

          { movieData["Ratings"] && 
            <div className="ratings-wrapper">
              <span className="ratings-chip-wrapper">
                <Chip 
                  label={`(IMDB : ${movieData["Ratings"][0]['Value']})`} 
                  onClick={() => handleRatingsChipClick('imdb')}
                /> 
              </span>
              <span className="ratings-chip-wrapper">
                <Chip 
                  label={`(Rotten Tomatoes : ${movieData["Ratings"][1]['Value']})`}
                  onClick={() => handleRatingsChipClick('rotten tomatoes')}
                />
              </span>
              <span className="ratings-chip-wrapper">
                <Chip 
                  label={`(Metacritic : ${movieData["Ratings"][2]['Value']})`}
                  onClick={() => handleRatingsChipClick('metacritic')}
                />
              </span>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
  
export default HomePage;
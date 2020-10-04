import './landing-page.scss';

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import TheatersSharpIcon from '@material-ui/icons/TheatersSharp';


// OMBD API KEY: 5aac9b1a

function LandingPage(props) {
    const [movieName, setMovieName] = useState('');

    const history = useHistory();
    const axios = require('axios');

    const handleMovieSearch = () => {      
      try {
        axios.get('http://www.omdbapi.com/?apikey=5aac9b1a&t=' + movieName)
          .then(res => {
            history.push('/search', {
              'movieData': res.data
            });
          });
      } catch(error) {
        console.error('Failed getting movie data:', error);
      }
    };

    const handleKeyPress = (event) => {
      if(event.key === 'Enter') {
        handleMovieSearch();
      }
    };

    return (
      <div className="container container-wrapper">
        <div className="search-wrapper">
          <div className="row">
            <div className="col-sm d-flex justify-content-center">
              <Typography variant="h3">
                <span>Movie Rec</span>
                <span><TheatersSharpIcon className="movie-icon"/></span>
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex justify-content-center">
              <TextField 
                variant="outlined" 
                margin="dense"
                onChange={e => setMovieName(e.target.value)}
                onKeyDown={e => handleKeyPress(e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default LandingPage;
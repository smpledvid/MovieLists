import './landing-page.scss';

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";

function LandingPage(props) {
    const [movieName, setMovieName] = useState('');
    const history = useHistory();

    const handleMovieSearch = () => {
      console.log('Searching for ' + movieName);
      history.push('/search', {
        'movieName': movieName
      });
    };

    const handleKeyPress = (event) => {
      if(event.key === 'Enter') {
        handleMovieSearch();
      }
    };

    return (
      <div className="container">
        <Typography>Movie Rec.</Typography>
        <TextField 
          variant="outlined" 
          margin="dense"
          onChange={e => setMovieName(e.target.value)}
          onKeyDown={e => handleKeyPress(e)}
        />
      </div>
    );
}
  
export default LandingPage;
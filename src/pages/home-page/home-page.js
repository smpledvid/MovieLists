import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import DrawerComponent from "./components/drawer.component";
import './home-page.scss';

import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
  }
  
}));

function HomePage(props) {
  const axios = require('axios');
  const classes = useStyles();
  const history = useHistory();

  const [movieData, setMovieData] = useState({});
  const [movieSearchName, setMovieSearchName] = useState('');
  const [drawerTrigger, setDrawerTrigger] = useState();

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

  const handleMovieSearch = () => {      
    try {
      axios.get('http://www.omdbapi.com/?apikey=5aac9b1a&t=' + movieSearchName)
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

  const handleOpenDrawer = () => {
    setDrawerTrigger(!drawerTrigger);
    console.log('opening drawer' , drawerTrigger);
  };

  return (
    <div className="page-wrapper">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <div className="input-wrapper">
            <TextField 
              variant="outlined" 
              margin="dense"
              placeholder="Search..."
              className={classes.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={e => setMovieSearchName(e.target.value)}
              onKeyDown={e => handleKeyPress(e)}
            />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <DrawerComponent
        drawerTrigger={drawerTrigger}
      ></DrawerComponent>
      <div className="container-wrapper">
        <div className="container container-child-wrapper">
          <div className="row">
            <div className="col-lg-4 poster-wrapper">
              <img src={movieData["Poster"]} alt=""/>
            </div> 
            <div className="col-lg-8">
              <div className="description">
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
                        label={`(IMDB : ${movieData["Ratings"][0] ? movieData["Ratings"][0]['Value'] : 'N/A'})`} 
                        onClick={() => handleRatingsChipClick('imdb')}
                      /> 
                    </span>
                    <span className="ratings-chip-wrapper">
                      <Chip 
                        label={`(Rotten Tomatoes : ${movieData["Ratings"][1] ? movieData["Ratings"][1]['Value'] : 'N/A'})`}
                        onClick={() => handleRatingsChipClick('rotten tomatoes')}
                      />
                    </span>
                    <span className="ratings-chip-wrapper">
                      <Chip 
                        label={`(Metacritic : ${movieData["Ratings"][2] ? movieData["Ratings"][2]['Value'] : 'N/A'})`}
                        onClick={() => handleRatingsChipClick('metacritic')}
                      />
                    </span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default HomePage;


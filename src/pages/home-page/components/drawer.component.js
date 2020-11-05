
import React, { useState, useEffect } from 'react';
import './drawer.scss';

import Slider from "react-slick";

import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const carouselSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "50px",
  slidesToShow: 3,
  speed: 500
};

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: '100%',
      flexShrink: 0,
    },
    drawerPaper: {
      width: '80%',
      backgroundColor: 'lightgrey'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

function DrawerComponent(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [drawerOpen, setOpen] = useState(false);

    useEffect(() => {
      if(props.drawerTrigger !== undefined) {
        handleDrawerStateToggle(props.drawerTrigger);
      }
    }, [props.drawerTrigger]);

    const handleChangingDrawerState = (open) => {
      setOpen(open);
    };

    const handleDrawerStateToggle = () => {
      setOpen(!drawerOpen);
    }

    return (
      <div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => handleChangingDrawerState(false)}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel">
              <Slider {...carouselSettings} >
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
                <div className="mock-slider-item">
                  <img src="https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg" alt=""/>
                </div>
              </Slider>
            </div>
          </div>
        </Drawer>
      </div>
    )
}

export default DrawerComponent;
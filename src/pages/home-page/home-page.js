import React, { useState, useEffect } from 'react';
import './home-page.scss';

function HomePage(props) {
  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    setMovieName(props.location.state.movieName);
  }, [props]);

  return (
    <div className="container">
      Home Page : {movieName}
    </div>
  );
}
  
export default HomePage;
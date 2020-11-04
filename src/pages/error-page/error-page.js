import React, { useState, useEffect } from 'react';

function ErrorPage(props) {
    const [errorMessage, setErrorMessage] = useState('You ran into an error that David didn\'t fix.');

    useEffect(() => {
        console.log(props.location.state)
        if(props.location.state.movieData) {
            setErrorMessage('Movie not found, please search again');
        }
    }, [props.location.state]);

    return (
      <div>{errorMessage}</div> 
    );
}

export default ErrorPage;
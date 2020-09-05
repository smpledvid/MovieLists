import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import { LandingPage, HomePage } from "./pages/index";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/search" component={HomePage}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

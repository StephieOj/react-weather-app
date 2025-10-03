
import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return ( 
  <div className="App"> 
  <div className ="container">
  <Weather defaultCity ="London" />

  <footer> This app was coded by StephieOj 💕 and is open-sourced on <a className= "github-link" href="https://github.com/StephieOj/react-weather-app" target='_blank' rel="noopener noreferrer">Github</a>.</footer>
  </div>
  </div>);
    
}

export default App;

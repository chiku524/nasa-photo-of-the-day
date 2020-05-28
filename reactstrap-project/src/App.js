import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/insight_weather/?api_key=L7cYeMNDJ6AmPKxk8hI3SPfW7AfXjN711ys0NNjH&feedtype=json&ver=1.0')
        .then((response) => {
          console.log(response);
        })
    }
  })

  return (
    <div>
        Hi Everyone!
    </div>
  );
}

export default App;

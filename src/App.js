import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NavBar from './NavBar';
import POTD from './PhotoOfTheDay';

function App() {
  const [data, setData] = useState({hey: 'hey'});

  useEffect(() => { 
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=L7cYeMNDJ6AmPKxk8hI3SPfW7AfXjN711ys0NNjH')
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error));
    }

    fetchData();
  }, [])

  console.log(data);
  return (
    <div className="App">
      <NavBar />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <POTD props={data}/>
    </div>
  );
}

export default App;

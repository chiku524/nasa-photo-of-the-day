import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=L7cYeMNDJ6AmPKxk8hI3SPfW7AfXjN711ys0NNjH')
        .then(response => {
          setData(response.data)
          console.log(data);
        })
        .catch(error => console.log(error));
    }

    fetchData();
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NavBar from './NavBar';
import POTD from './PhotoOfTheDay';
import Title from './Title';
import Explanation from './Explanation';
import Btn from './Button';

function App() {
  const [data, setData] = useState({hey: 'hey'});
  const [date, setDate] = useState('hey');
  const [title, setTitle] = useState('Hey');
  const [explanation, setExplanation] = useState('bye');

  useEffect(() => { 
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=L7cYeMNDJ6AmPKxk8hI3SPfW7AfXjN711ys0NNjH')
        .then(response => {
          setData(response.data);
          setDate(response.data.date);
          setTitle(response.data.title);
          setExplanation(response.data.explanation);
        })
        .catch(error => console.log(error));
    }

    fetchData();
  }, [date])

  console.log(data);

  return (
    <div className="App">
      <NavBar />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Title title={title} date={date} />
      <div className='PicAndButtonContainer'>
        <Btn>Left</Btn>
        <POTD props={data} date={date} />
        <Btn>Right</Btn>
      </div>
      <Explanation explanation={explanation} />
    </div>
  );
}

export default App;

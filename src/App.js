import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NavBar from './NavBar';
import POTD from './PhotoOfTheDay';
import Title from './Title';
import Explanation from './Explanation';

function App() {
  var today = new Date();
  var month = (today.getMonth() + 1);
  var year = today.getFullYear();
  var day = today.getDate();
  var dateFormatted = year + '-0' + month + '-' + day;
  console.log(dateFormatted);

  //pass in a function to POTD
  function leftClick(){
    day=day-1;
    if(day.lenth < 2){
      day = '0' + (day-1);
    }
    if(month.length < 2){
      month = '0'
    }
    var dateFormatted = year + '-0' + month + '-' + day;
    setDate(dateFormatted);
    console.log(dateFormatted);
  }

  function rightClick(){
    day=day+1;
    if(day.length < 2){
      day = '0' + (day + 1);
    }
    if(month.length < 2){
      month = '0'
    }
    var dateFormatted = year + '-0' + month + '-' + day;
    setDate(dateFormatted);
  }

  const [data, setData] = useState({hey: 'hey'});
  const [date, setDate] = useState('2020-05-29');
  const [title, setTitle] = useState('Hey');
  const [explanation, setExplanation] = useState('bye');

  useEffect(() => { 
    const fetchData = () => {
      // if (month.length < 2) {
      //   month = '0' + month;
      // }
      // if (day.length < 2) {
      //   day = '0' + day;      
      // }
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=L7cYeMNDJ6AmPKxk8hI3SPfW7AfXjN711ys0NNjH&date=${date}`)
        .then(response => {
          setData(response.data);
          setDate(dateFormatted);
          setTitle(response.data.title);
          setExplanation(response.data.explanation);
        })
        .catch(error => console.log(error));
    }

    fetchData();
  }, [dateFormatted, date])

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
        <POTD props={data} date={date} leftClick={leftClick} rightClick={rightClick} />
      </div>
      <Explanation explanation={explanation} />
    </div>
  );
}

export default App;

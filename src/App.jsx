import {React, useState, useEffect} from "react";
import './App.scss';
import axios from 'axios';

import MainDisplay from "./Components/MainDisplay/MainDisplay.jsx";
import Nav from "./Components/Nav/Nav.jsx";

const App = () => {

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [beersData, updateBeersData] = useState();
  const [showMenu, setShowMenu] = useState (false);
  const [speakToBarman, setSpeakToBarman] = useState(false);
  const [beersFilter, setBeerFilter] = useState(undefined);;
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [answer, setAnswer] = useState("Hey, I am your barbot! Fancy a pint or a joke?");

  const getBeers = async (query) => {
    const url = query;
    const res = await fetch(url);
    if(!res.ok) {
      updateBeersData("There was en error with your request. Please check the input and try again");
    } else {
      const data = await res.json();
      updateBeersData(data);
    }
  };

  const getBarbot = async (message) => {

    const options = {
      method: 'GET',
      url: 'http://api.brainshop.ai/wechat/get',
      params: {bid: '167018', key: 'GdlsypbPt0FMpT8E', uid: '1', msg: message},
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
        'Access-Control-Allow-Origin' : '*'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  useEffect(()=> {
    
    const handleWindowResize = () => {

      setWindowSize(getWindowSize());

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }

  },[])

  const handleBarChat = () => {

    const message = document.querySelector(".barbot__input");
    const messageValue = message.value;

    getBarbot(messageValue);

  }

  const handleMenuClick = () => {

    setShowMenu(!showMenu);
    if(speakToBarman==true) {
      setSpeakToBarman(!speakToBarman);
    }

  }

  const handleBarmanClick = () => {

    setSpeakToBarman(!speakToBarman);
    if(showMenu==true) {
      setShowMenu(!showMenu);
    }
  }

  const handleBeerFilterChange = (event) => {

    event.preventDefault();
    setBeerFilter(event.target.value);

  }

  const filterBeers = (beers, filter) => {

    if (filter == undefined) {
      return beers;
    } else {

      return beers.filter(beer => beer.name.includes(filter))

    }
  }


  return (
    <div className="App">
      <Nav menuClick={handleMenuClick} barmanClick={handleBarmanClick}/>
      <MainDisplay  showMenu={showMenu}
                    speakToBarman={speakToBarman}
                    beers={getBeers}
                    closeSearch={handleMenuClick}
                    beersData={filterBeers(beersData, beersFilter)}
                    handleChange={handleBeerFilterChange}
                    windowWidth={windowSize.innerWidth}
                    message={answer}
                    handleBarChat={handleBarChat}/>
    </div>
  );
}

export default App;

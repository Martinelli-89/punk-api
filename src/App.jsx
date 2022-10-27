import {React, useState, useEffect} from "react";
import './App.scss';

import MainDisplay from "./Components/MainDisplay/MainDisplay.jsx";
import Nav from "./Components/Nav/Nav.jsx";

const App = () => {

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [beersData, updateBeersData] = useState();
  const [showMenu, setShowMenu] = useState (false);
  const [speakToBarman, setSpeakToBarman] = useState(false);
  const [beersFilter, setBeerFilter] = useState(undefined);
  const [windowSize, setWindowSize] = useState(getWindowSize());

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

  useEffect(()=> {
    
    const handleWindowResize = () => {

      setWindowSize(getWindowSize());

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }

  },[])

  const handleMenuClick = () => {

    setShowMenu(!showMenu);
    if(speakToBarman==true) {
      setSpeakToBarman(!speakToBarman);
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
      <Nav menuClick={handleMenuClick}/>
      <MainDisplay  showMenu={showMenu}
                    beers={getBeers}
                    closeSearch={handleMenuClick}
                    beersData={filterBeers(beersData, beersFilter)}
                    handleChange={handleBeerFilterChange}
                    windowWidth={windowSize.innerWidth}
                    />
    </div>
  );
}

export default App;

import {React, useState} from "react";
import './App.scss';

import MainDisplay from "./Components/MainDisplay/MainDisplay.jsx";
import Nav from "./Components/Nav/Nav.jsx";

const App = () => {

  const [beersData, updateBeersData] = useState();
  const [showMenu, setShowMenu] = useState (false);
  const [speakToBarman, setSpeakToBarman] = useState(false);
  const [beersFilter, setBeerFilter] = useState(undefined);

  const getBeers = async (query) => {
    const url = query;
    const res = await fetch(url);
    const data = await res.json();
    updateBeersData(data);
  };

  const handleMenuClick = () => {

    setShowMenu(!showMenu);

  }

  const handleBarmanClick = () => {

    setSpeakToBarman(!speakToBarman);

  }

  const handleBeerFilterChange = (event) => {

    event.preventDefault();
    setBeerFilter(event.target.value);

  }


  return (
    <div className="App">
      <Nav menuClick={handleMenuClick} barmanClick={handleBarmanClick}/>
      <MainDisplay  showMenu={showMenu}
                    speakToBarman={speakToBarman}
                    beers={getBeers}
                    closeSearch={handleMenuClick}
                    beersData={beersData}
                    beersFilter={beersFilter}
                    handleChange={handleBeerFilterChange}/>
    </div>
  );
}

export default App;

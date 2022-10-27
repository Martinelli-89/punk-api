import {React, useState, useEffect} from "react";
import './App.scss';

import MainDisplay from "./Components/MainDisplay/MainDisplay.jsx";
import Nav from "./Components/Nav/Nav.jsx";

const App = () => {

  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [beersData, updateBeersData] = useState(undefined);
  const [showMenu, setShowMenu] = useState (false);
  const [beersFilter, setBeerFilter] = useState(undefined);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isPH, setIsPH] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleIsPH = (event) => {
    if (event.target.checked) {
      setIsPH(true);
    } else {
      setIsPH(false);
    }
  }

  const getBeers = async (query) => {
    setLoading(true);
    const url = query;
    const res = await fetch(url);
    if(!res.ok) {
      setLoading(false);
      updateBeersData("There was en error with your request. Please check the input and try again");
    } else {
      const data = await res.json();
      setLoading(false);
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

  }

  const handleBeerFilterChange = (event) => {

    event.preventDefault();
    setBeerFilter(event.target.value);

  }

  const filterBeers = (beers, filter, isPH) => {

    if(beers ==undefined) {
      return;
    }

    if (filter == undefined && isPH == false) {
      return beers;
    } else  if (filter != undefined && isPH == false){
        return beers.filter(beer => beer.name.includes(filter))
    } else if (filter == undefined && isPH == true) {
        return beers.filter(beer => beer.ph < 4)
    } else {
        return beers.filter(beer => (beer.name.includes(filter) && beer.ph < 4))
    }
  }


  return (
    <div className="App">
      <Nav  menuClick={handleMenuClick}
            setIsPH={toggleIsPH}
            beersData={toggleIsPH}
            />
      <MainDisplay  showMenu={showMenu}
                    beers={getBeers}
                    closeSearch={handleMenuClick}
                    beersData={filterBeers(beersData, beersFilter,isPH)}
                    handleChange={handleBeerFilterChange}
                    windowWidth={windowSize.innerWidth}
                    loading={loading}
                    />
    </div>
  );
}

export default App;

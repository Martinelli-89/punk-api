import {React, useState} from "react";
import './App.scss';

import Search from './Components/Search/Search.jsx';
import Beers from './Components/Beers/Beers.jsx';

const App = () => {

  const [beersData, updateBeersData] = useState();

  const getBeers = async (query) => {
    const url = query;
    const res = await fetch(url);
    const data = await res.json();
    updateBeersData(data);
  };


  return (
    <div className="App">
      <Beers beers={beersData}/>
      <Search getBeers={getBeers}/>
    </div>
  );
}

export default App;

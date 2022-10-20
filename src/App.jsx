import {React, useState} from "react";
import './App.scss';

import Search from './Components/Search/Search.jsx';
import Beers from './Components/Beers/Beers.jsx';

const App = () => {

  const [beers, addBeers] = useState();

  return (
    <div className="App">
      <Beers data={beers}/>
      <Search />
    </div>
  );
}

export default App;

import {React, useState} from "react";
import './App.scss';

import Search from './Components/Search/Search.jsx';
import Beers from './Components/Beers/Beers.jsx';

const App = () => {

  const [APIquery, setAPIquery] = useState();

  const updateQuery = (value) => {
    
    setAPIquery(value);

  }


  return (
    <div className="App">
      <Beers dataQuery={APIquery}/>
      <Search updateQuery={updateQuery}/>
    </div>
  );
}

export default App;

import './Beers.scss';
import {React, useState} from "react";

import DisplayBeers from '../DisplayBeers/DisplayBeers.jsx';

const Beers = ({dataQuery}) => {

    const [beersData, updateBeersData] = useState(undefined);

    const getBeers = async () => {
        const url = dataQuery;
        const res = await fetch(url);
        const data = await res.json();
        updateBeersData(data.results);
      };


    let render;
    
    if (beersData == undefined) {
        
        render = 
            <section className='intro'>
                <h3 className='intro__description'>
                    Welcome to the _Nology pub!
                    Search trough our menu below
                    and get yourself a well deserved pint!
                </h3>
            </section>

    } else {

        render = <DisplayBeers data={beersData}/>

    }

    return (
        <>
            {render}
        </>
    );
}

export default Beers;

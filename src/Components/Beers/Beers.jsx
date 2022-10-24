import './Beers.scss';

import {React, useState} from 'react';
import beers from "../../Assets/Data/MockData.js";
import DisplayBeers from '../DisplayBeers/DisplayBeers.jsx';

const Beers = ({dataQuery}) => {

    const [beersData, updateBeersData] = useState(beers);

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
        <div>
            {render}
        </div>
    );
}

export default Beers;

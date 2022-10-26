import {React, useState} from 'react';
import DisplayBeers from '../DisplayBeers/DisplayBeers';
import Filter from '../Filter/Filter.jsx';
import SearchMenu from '../SearchMenu/SearchMenu';
import "./MainDisplay.scss";

const MainDisplay = ({showMenu, speakToBarman, beers, closeSearch, beersData, beersFilter, handleChange}) => {

    const [beerToDisplay, setBeerToDisplay] = useState([0,4]);

    const changeBeerToDisplay = (event) => {
        
        if(event.target.classList.contains("plus")) {
            if(beerToDisplay[1] < beersData.length) {
                setBeerToDisplay([beerToDisplay[0]+4,beerToDisplay[1]+4]);
            }
        } else {
            if(beerToDisplay[0]>0) {
                setBeerToDisplay([beerToDisplay[0]-4,beerToDisplay[1]-4]);
            }
        }
    }

    let render = <main>
                    <h3>Welcome to the _nology pub. Get yourself a beer!</h3>
                </main>;

    if(showMenu === true) {
        render = <main>
                    <SearchMenu getBeers={beers} showMenu={closeSearch}/>
                </main>;
    } else if (beersData != undefined) {

        if(beersData == "There was en error with your request. Please check the input and try again") {

            render = <main>
                        <h3>{beersData}</h3>
                    </main>;

        } else {

        render = <main>
                    <DisplayBeers   data={beersData.slice(beerToDisplay[0],beerToDisplay[1])}
                                    beersFilter={beersFilter}
                                    setBeerToDisplay={changeBeerToDisplay}/>
                    <Filter handleChange={handleChange}/>
                </main>
        
    }
    }



    return (

        <>
            {render}
        </>

    );

}

export default MainDisplay;
import {React} from 'react';
import DisplayBeers from '../DisplayBeers/DisplayBeers';
import Filter from '../Filter/Filter.jsx';
import SearchMenu from '../SearchMenu/SearchMenu';
import "./MainDisplay.scss";

const MainDisplay = ({showMenu, speakToBarman, beers, closeSearch, beersData, beersFilter, handleChange}) => {

    let render = <main>
                    <h3>Welcome to the _nology pub. Get yourself a beer!</h3>
                </main>;

    if(showMenu === true) {
        render = <main>
                    <SearchMenu getBeers={beers} showMenu={closeSearch}/>
                </main>;
    } else if (beersData != undefined) {

        render = <main>
                    <DisplayBeers   data={beersData}
                                    beersFilter={beersFilter}/>
                    <Filter handleChange={handleChange}/>
                </main>

    }



    return (

        <>
            {render}
        </>

    );

}

export default MainDisplay;
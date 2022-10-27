import {React, useState, useEffect} from 'react';
import DisplayBeers from '../DisplayBeers/DisplayBeers';
import Filter from '../Filter/Filter.jsx';
import SearchMenu from '../SearchMenu/SearchMenu';
import "./MainDisplay.scss";
import beer from "../../Assets/Images/beer.svg"

const MainDisplay = ({showMenu, beers, closeSearch, beersData, handleChange, windowWidth, loading}) => {

    const amountCardsToDisplay = Math.floor((windowWidth/ 180)) * 2;


    const [beerToDisplay, setBeerToDisplay] = useState([0,amountCardsToDisplay]);
   

    useEffect(()=> {

        setBeerToDisplay([0, amountCardsToDisplay]);

    },[windowWidth])

    const changeBeerToDisplay = (event) => {
        
        if(event.target.classList.contains("plus")) {
            if(beerToDisplay[1] < beersData.length) {
                setBeerToDisplay([beerToDisplay[0]+amountCardsToDisplay,beerToDisplay[1]+amountCardsToDisplay]);
            }
        } else  if(event.target.classList.contains("plus")){
            if(beerToDisplay[0]>0) {
                setBeerToDisplay([beerToDisplay[0]-amountCardsToDisplay,beerToDisplay[1]-amountCardsToDisplay]);
            }
        } else {
            setBeerToDisplay([0, amountCardsToDisplay]);
        }
    }

    const handleChangeDoubleFunction = (event) => {

        handleChange(event);
        changeBeerToDisplay(event);

    }

    let render = <main>
                    <div className='entrycard'>Welcome to the _nology pub. We believe that after every line of code you tipe you deserve a sip of beer. So sit down, open your laptop, and get yourself one of our amazing beers.</div>
                </main>;

    if(showMenu === true) {
        render = <main>
                    <SearchMenu getBeers={beers} showMenu={closeSearch}/>
                </main>;
    }
        else if (loading == true) {

            render = <main>
                        <div className='loadWrap'>
                            <img src={beer}></img>
                            <h3>Loading</h3>
                        </div>
                    </main>;

        }

        else if (beersData != undefined) {

        if(beersData == "There was en error with your request. Please check the input and try again") {

            render = <main>
                        <div className='entrycard'>{beersData}</div>
                    </main>;

        } else {

        render = <main>
                    <DisplayBeers   data={beersData.slice(beerToDisplay[0],beerToDisplay[1])}
                                    setBeerToDisplay={changeBeerToDisplay}/>
                    <Filter handleChange={handleChangeDoubleFunction}
                            changeBeerToDisplay={changeBeerToDisplay}/>
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
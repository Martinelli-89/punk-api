import {React} from "react";
import BeerCard from "../BeerCard/BeerCard.jsx";
import "./DisplayBeers.scss";
import left from "../../Assets/Images/left.svg";
import right from "../../Assets/Images/right.svg";

const DisplayBeers = ({data, beersFilter, updatePage}) => {

    const cards = data.map((beer, index) => {

        if(beersFilter == undefined) {
            
            return (

                <BeerCard beer={beer} key={beer.id * Math.random() * (index+1)} />
            
            );

        } else if(beer.name.includes(beersFilter)) {

            return (

                <BeerCard beer={beer} key={beer.id * Math.random() * (index+1)} />
            
            );
            }

    });

    return (
        <>
            <section className="beer-container">
                {cards}
            </section>
            <div className="changePage">
                <div className="left">
                    <img src={left} className="minus" onClick={updatePage}></img>
                    Previous page
                </div>
                <div className="right">
                    Next page
                    <img src={right} className="plus" onClick={updatePage}></img>
                </div>
            </div>
        </>

    );

}

export default DisplayBeers;
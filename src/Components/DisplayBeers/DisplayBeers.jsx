import {React} from "react";
import BeerCard from "../BeerCard/BeerCard.jsx";
import "./DisplayBeers.scss";
import left from "../../Assets/Images/leftBlack.svg";
import right from "../../Assets/Images/rightBlack.svg";

const DisplayBeers = ({data, beersFilter, setBeerToDisplay}) => {

    const cards = data.map((beer, index) => {
            
            return (

                <BeerCard beer={beer} key={beer.id * Math.random() * (index+1)} />
            
            )
            
    });

    return (
        <>
            <section className="beer-container">
                {cards}
            </section>
            <div className="changePage">
                <div className="left">
                    <img src={left} className="minus" onClick={setBeerToDisplay}></img>
                    Previous page
                </div>
                <div className="right">
                    Next page
                    <img src={right} className="plus" onClick={setBeerToDisplay}></img>
                </div>
            </div>
        </>

    );

}

export default DisplayBeers;
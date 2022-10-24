import {React} from "react";
import BeerCard from "../BeerCard/BeerCard.jsx";
import "./DisplayBeers.scss";

const DisplayBeers = ({data}) => {

    const cards = data.map((beer, index) => {

        return (

            <BeerCard beer={beer} key={beer.id * Math.random() * (index+1)} />
        
        );

    });

    return (

        <section className="beer-container">
            {cards}
        </section>

    );

}

export default DisplayBeers;
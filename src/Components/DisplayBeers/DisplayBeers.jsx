import {React} from "react";
import BeerCard from "../BeerCard/BeerCard.jsx";
import "./DisplayBeers.scss";

const DisplayBeers = ({data, beersFilter}) => {

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

        <section className="beer-container">
            {cards}
        </section>

    );

}

export default DisplayBeers;
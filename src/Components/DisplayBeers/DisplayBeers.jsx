import {React} from "react";
import BeerCard from "../BeerCard/BeerCard.jsx";
import "./DisplayBeers.scss";

const DisplayBeers = ({data}) => {

    const emptyBoard = <section className="beerCard">
                            <div className="beerCard__left">
                                <h2 className="beerName">Coming soon</h2>
                                <h4 className="beerTagline"></h4>
                            </div>
                        </section>;

    const cards = data.map((beer, index) => {

        return (

            <BeerCard beer={beer} key={beer.id * Math.random() * (index+1)} />
        
        );

    });

    while(cards.length < 5) {
        cards.push(emptyBoard);
    }

    return (

        <section className="beer-container">
            {cards}
        </section>

    );

}

export default DisplayBeers;
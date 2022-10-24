import {React} from "react";
import CreatePrices from "../../Logic/CreatePrices";
import "./BeerCard.scss";
import trimName from "../../Logic/TrimBeerName.js";

const BeerCard = ({beer}) => {

    return (

        <section className="beerCard">
            <div className="beerCard__left">
                <h2 className="beerName">{trimName(beer.name)}</h2>
                <h4 className="beerTagline">{beer.tagline}</h4>
            </div>
            <div className="beerCard__middle">
                <h6 className="abv">ABV <br></br>{beer.abv}</h6>
                <h6 className="ibu">IBU <br></br> {beer.ibu}</h6>
                <h6 className="ph">PH <br></br> {beer.ph}</h6>
            </div>
            <div className="beerCard__right">
                <h5>HALF <br></br> {CreatePrices(beer.abv, "half")}</h5>
                <h5>PINT <br></br> {CreatePrices(beer.abv, "pint")}</h5>
            </div>
        </section>

    )


}

export default BeerCard;
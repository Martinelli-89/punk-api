import {React} from "react";
import CreatePrices from "../../Logic/CreatePrices";
import "./BeerCard.scss";
import trimName from "../../Logic/TrimBeerName.js";
import beerPic from "../../Assets/Images/beer.svg";

const BeerCard = ({beer}) => {

    return (

        <section className="beerCard">
            <div className="beerCard__top">
                <h2 className="beerName">{trimName(beer.name)}</h2>
                <img src={beerPic}></img>
                <h4 className="beerTagline">{beer.tagline}</h4>
            </div>
            <div className="beerCard__middle">
                {beer.abv && <h6 className="abv">ABV <br></br>{beer.abv}</h6>}
                {beer.ibu && <h6 className="ibu">IBU <br></br> {beer.ibu}</h6>}
                {beer.ph && <h6 className="ph">PH <br></br> {beer.ph}</h6>}
            </div>
        </section>

    )


}

export default BeerCard;
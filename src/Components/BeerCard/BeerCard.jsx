import {React} from "react";
import "./BeerCard.scss";
import trimName from "../../Logic/TrimBeerName.js";
import beerPic from "../../Assets/Images/beer.svg";

const BeerCard = ({beer}) => {

    return (

        <section className="beerCard">
            <div className="beerCard__top">
                <h3 className="beerName">{trimName(beer.name)}</h3>
                <img src={beerPic}></img>
                <h4 className="beerTagline">{trimName(beer.tagline)}</h4>
            </div>
            <div className="beerCard__middle">
                {beer.abv && <h5 className="abv">ABV <br></br>{beer.abv}</h5>}
                {beer.ibu && <h5 className="ibu">IBU <br></br> {beer.ibu}</h5>}
                {beer.ph && <h5 className="ph">PH <br></br> {beer.ph}</h5>}
            </div>
        </section>

    )


}

export default BeerCard;
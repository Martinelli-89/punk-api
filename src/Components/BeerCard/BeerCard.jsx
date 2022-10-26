import {React} from "react";
import CreatePrices from "../../Logic/CreatePrices";
import "./BeerCard.scss";
import trimName from "../../Logic/TrimBeerName.js";

const BeerCard = ({beer}) => {

    const fonts = ["Caveat", "Fuzzy Bubble", "Gloria Hallelujah", "Rock salt", "Indie Flower", "Patrick Hand SC"];
    const colors = ["#b96529", "#b23024", "#a8981f;", "#2637b6", "#b14a9e","#e16080","#6bb1d7","#509c49","#b96529", "#b23024", "#a8981f;", "#2637b6", "#b14a9e","#e16080","#6bb1d7","#509c49"];

    return (

        <section className="beerCard" style={{color:`${colors[Math.floor(Math.random() * 15)]}`}}>
            <div className="beerCard__left">
                <h2 className="beerName">{trimName(beer.name)}</h2>
                <h4 className="beerTagline">{beer.tagline}</h4>
            </div>
            <div className="beerCard__middle">
                {beer.abv && <h6 className="abv">ABV <br></br>{beer.abv}</h6>}
                {beer.ibu && <h6 className="ibu">IBU <br></br> {beer.ibu}</h6>}
                { beer.ph && <h6 className="ph">PH <br></br> {beer.ph}</h6>}
            </div>
            <div className="beerCard__right">
                <h5>HALF <br></br> {CreatePrices(beer.abv, "half")}</h5>
                <h5>PINT <br></br> {CreatePrices(beer.abv, "pint")}</h5>
            </div>
        </section>

    )


}

export default BeerCard;
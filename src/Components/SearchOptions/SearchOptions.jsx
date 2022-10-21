import {React, useState} from "react";
import "./SearchOption.scss";

import left from "../../Assets/Images/left.svg";
import right from "../../Assets/Images/right.svg";

const SearchOptions = ({options, swipeParams}) => {

    return (

        <section className="searchParams">
            <div className="mainParam">
                <img src={left} alt="slideLeft" onClick={swipeParams} className="mainParam__left"></img>
                <p className="mainParam__sideL">{options[0][0]}</p>
                <p className="mainParam__middle">{options[1][0]}</p>
                <p className="mainParam__sideR">{options[2][0]}</p>
                <img src={right} alt="slideRight" onClick={swipeParams} className="mainParam__right"></img>
            </div>
            <div className="secondParam">
                <img src={left} alt="secSlideLeft" className="secondParam__left"></img>
                <p className="secondParam__param">{options[1][1][0]}</p>
                <img src={right} alt="secSlideRight" className="secondParam__right"></img>
            </div>
            <div className="submit">
                <input className="submit__input"></input>
                <button className="submit__button">See menu</button>
            </div>
        </section>

    );

}

export default SearchOptions;
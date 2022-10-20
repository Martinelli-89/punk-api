import {React, useState} from "react";
import "./SearchMenu.scss";
import dropUp from "../../Assets/Images/DropUp.svg";
import dropDown from "../../Assets/Images/DropDown.svg"

const SearchMenu = ({showMenu, toggleShowMenu}) => {

    let menu;

    if(showMenu == false) {

        menu = 
            <div className="dropUp">
                <img src={dropUp} alt="Open menu" className="dropUp__icon" onClick={toggleShowMenu}></img>
                <p>Order here</p>
            </div>;

    } else {

        menu = 
            <div className="dropDown">
                <img src={dropDown} alt="Close menu" className="dropDown__icon" onClick={toggleShowMenu}></img>
                <p>Search option here</p>
            </div>;


    }

    return (

        <section>
            {menu}
        </section>

    );

}

export default SearchMenu;
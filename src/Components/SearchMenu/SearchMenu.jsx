import {React, useState} from "react";
import "./SearchMenu.scss";
import dropUp from "../../Assets/Images/DropUp.svg";
import dropDown from "../../Assets/Images/DropDown.svg"
import Searchoptions from "../SearchOptions/SearchOptions";

const SearchMenu = ({showMenu, toggleShowMenu}) => {

    const [firstParams, setFirstParams] = useState([["ABV", ["LESSER THEN", "GREATER THEN"]], ["IBU", ["LESSER THEN", "GREATER THEN"]], ["EBC", ["LESSER THEN", "GREATER THEN"]], ["BY DATE", ["BREWED BEFORE", "BREWED AFTER"]], ["BY NAME", ["ENTER NAME BELOW"]],["BY YEAST", ["ENTER YEEAST BELOW"]],["BY HOP", ["ENTER HOP BELOW"]],["BY MALT", ["ENTER MALT BELOW"]]]);
    
    const handleMainParamChange = (event) => {

        if (event.target.className == "left") {
            const firstElem = [firstParams[0]];
            const remainingParams = firstParams.slice(1);
            const updatedParams = remainingParams.concat(firstElem);
            setFirstParams(updatedParams);
        } else {
            const lastElem = [firstParams[firstParams.length-1]];
            const remainingParams = firstParams.slice(0, -1);
            const updatedParams = lastElem.concat(remainingParams);
            setFirstParams(updatedParams);
        }

    }

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
                <Searchoptions options={firstParams} swipeParams={handleMainParamChange} />
            </div>;


    }

    return (

        <section>
            {menu}
        </section>

    );

}

export default SearchMenu;
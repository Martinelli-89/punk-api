import {React, useState} from "react";
import "./SearchMenu.scss";
import dropUp from "../../Assets/Images/DropUp.svg";
import dropDown from "../../Assets/Images/DropDown.svg"
import Searchoptions from "../SearchOptions/SearchOptions";
import dataToQuery from "../../Logic/dataToQuery.js";
import convertDate from "../../Logic/convertDate.js";

const SearchMenu = ({getBeers, showMenu}) => {

    const [firstParams, setFirstParams] = useState([["ABV", ["LESSER THEN", "GREATER THEN"]], ["IBU", ["LESSER THEN", "GREATER THEN"]], ["EBC", ["LESSER THEN", "GREATER THEN"]], ["BY DATE", ["BREWED BEFORE", "BREWED AFTER"]], ["BY NAME", ["ENTER NAME BELOW"]],["BY YEAST", ["ENTER YEAST BELOW. USE & FOR MORE VALUES"]],["BY HOP", ["ENTER HOP BELOW. USE & FOR MORE VALUES"]],["BY MALT", ["ENTER MALT BELOW. USE & FOR MORE VALUES"]]]);
    
    const clearInput = () => {

        const inp = document.querySelector(".submit__input");
        inp.value = "";

    }

    const handleMainParamChange = (event) => {

        if (event.target.className == "mainParam__left") {
            const firstElem = [firstParams[0]];
            const remainingParams = firstParams.slice(1);
            const updatedParams = remainingParams.concat(firstElem);
            setFirstParams(updatedParams);
            clearInput();

        } else {
            const lastElem = [firstParams[firstParams.length-1]];
            const remainingParams = firstParams.slice(0, -1);
            const updatedParams = lastElem.concat(remainingParams);
            setFirstParams(updatedParams);
            clearInput();
        }

    }

    const handleSecondParamChange = () => {

        
        const updatedArr = firstParams.map ( elem => {

            if(elem == firstParams[1]) {
                return [firstParams[1][0],[firstParams[1][1][1], firstParams[1][1][0]]];
            } else {
                return elem;
            }

        });

        setFirstParams(updatedArr);

    }

    const handleSubmit = () => {

        let endQuery;
        const inp = document.querySelector(".submit__input");

        if(inp.type == "month") {
            endQuery = convertDate(inp.value);
        } else {
            endQuery = inp.value;
        }
 
        let query = "https://api.punkapi.com/v2/beers"

        query += dataToQuery(firstParams[1][0], firstParams[1][1][0]);

        query += endQuery;

        getBeers(query);

        showMenu();

    }

    let menu = 
            <>
                <Searchoptions  options={firstParams}
                                swipeParams={handleMainParamChange}  
                                swipe2ndParam={handleSecondParamChange}
                                submit={handleSubmit}/>
            </>;

    return (

        <section>
            {menu}
        </section>

    );

}

export default SearchMenu;
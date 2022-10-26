import {React} from 'react';
import "./Filter.scss";
import beerTaps from "../../Assets/Images/beerTaps.svg";

const Filter = ({handleChange}) => {

    return (

        <div className="filter">
            <input type="text" className="filter__input" placeholder='Search beer...' onChange={handleChange}></input>
        </div>

    );

}

export default Filter;
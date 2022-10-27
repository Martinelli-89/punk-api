import {React} from 'react';
import "./Filter.scss";

const Filter = ({handleChange}) => {

    return (

        <div className="filter">
            <input type="text" className="filter__input" placeholder='Filter beers...' onChange={handleChange}></input>
        </div>

    );

}

export default Filter;
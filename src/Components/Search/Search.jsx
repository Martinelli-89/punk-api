import {React, useState} from "react";

import SearchMenu from "../SearchMenu/SearchMenu.jsx";

const Search = ({getBeers}) => {


    return (

        <>
            <SearchMenu getBeers={getBeers}/>
        </>

    );

}

export default Search;
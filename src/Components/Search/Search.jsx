import {React, useState} from "react";

import SearchMenu from "../SearchMenu/SearchMenu.jsx";

const Search = ({getBeers}) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {

        setShowMenu(!showMenu);

    }

    return (

        <>
            <SearchMenu showMenu={showMenu} toggleShowMenu={toggleShowMenu} getBeers={getBeers}/>
        </>

    );

}

export default Search;
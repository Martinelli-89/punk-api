import {React, useState} from "react";

import SearchMenu from "../SearchMenu/SearchMenu.jsx";

const Search = ({updateQuery}) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {

        setShowMenu(!showMenu);

    }

    return (

        <>
            <SearchMenu showMenu={showMenu} toggleShowMenu={toggleShowMenu} updateQuery={updateQuery}/>
        </>

    );

}

export default Search;
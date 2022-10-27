import {React} from "react";
import  "./Nav.scss";

const Nav = ({menuClick, barmanClick}) => {

    return (

        <nav className="nav">
            <div className="nav__search" >
                <p onClick={menuClick}>Search beer</p>
            </div>
        </nav>

    );

}

export default Nav;
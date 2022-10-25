import {React} from "react";
import  "./Nav.scss";

const Nav = ({menuClick, barmanClick}) => {

    return (

        <nav className="nav">
            <p className="nav__search" onClick={menuClick}>Search <br></br> beer</p>
            <p className="nav__barman" onClick={barmanClick}>Speak with <br></br> barman</p>
        </nav>

    );

}

export default Nav;
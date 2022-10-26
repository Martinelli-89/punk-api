import {React} from "react";
import  "./Nav.scss";

const Nav = ({menuClick, barmanClick}) => {

    return (

        <nav className="nav">
            <div className="nav__search" >
                <p onClick={menuClick}>Search <br></br> beer</p>
            </div>
            <div className="nav__barman">
                <p onClick={barmanClick}>Speak with <br></br> barman</p>
            </div>
        </nav>

    );

}

export default Nav;
import {React} from "react";
import  "./Nav.scss";
import Checkbox from "../Checkbox/Checkbox.jsx";

const Nav = ({menuClick, setIsPH}) => {


    return (

        <nav className="nav">
            <div className="nav__search" >
                <p onClick={menuClick}>Search beer</p>
            </div>
            <div className="nav__filter" >
                <Checkbox   setIsPH={setIsPH}
                            />
            </div>
        </nav>

    );

}

export default Nav;
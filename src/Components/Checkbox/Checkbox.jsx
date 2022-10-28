
import {React, useState} from 'react';
import "./Checkbox.scss";

const Checkbox= ({setIsPH}) => {

    const [PHchecked, setPHChecked]= useState(false);

    const togglePH = () => {

        setPHChecked(!PHchecked);

    }

    let render = <div className='checkbox'>
                    <div className='checkbox__ph'>
                        <input  type="checkbox"
                                id="2"
                                name="PH"
                                value="Classic"
                                checked={PHchecked}
                                onClick={togglePH}
                                onChange={setIsPH}
                                />
                        <label> PH &#x3c; 4 </label>
                    </div>
                </div>

    return (

        <>
            {render}
        </>

    );

}

export default Checkbox;
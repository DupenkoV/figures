import {React, useState} from "react";
import "./burger.css"

import FilterColor from "../filterColor/FilterColor";
import Radio from "../Radio/Radio";
import InputColumn from "../inputColumn/inputColumn";

const Burger = (props) => {
    const [active, setActive] = useState(false)
    
    const burger = (
        <div className="burger"
            onClick={() => {setActive((prevState) => !prevState)}}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

    if(active) {
        return (
            <>
                {burger}
                <FilterColor />
                <Radio />
                <InputColumn getNumberOfColumns={props.getNumberOfColumns}/>
            </>
        )
    }
    return (
        <>
            {burger}
        </>
    )
}

export default Burger;
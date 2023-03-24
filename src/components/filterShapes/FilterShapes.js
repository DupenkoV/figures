import React from "react";
import "./filterShapes.css"
import Checkbox from "../checkbox";

const FilterShapes = () => {
    return (
        <div className="checkbox-group shapes">
            <Checkbox label={'круги'} id={'circle'}/>
            <Checkbox label={'квадраты'} id={'square'}/>
        </div>
    )
}
export default FilterShapes;
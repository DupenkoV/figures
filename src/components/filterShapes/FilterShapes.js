import React from "react";
import "./filterShapes.css"
import Checkbox from "../checkbox";

const FilterShapes = () => {
    return (
        <div className="checkbox-group shapes">
            <Checkbox label={'круги'}/>
            <Checkbox label={'квадраты'}/>
        </div>
    )
}
export default FilterShapes;
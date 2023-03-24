import React from "react";
import "./filterColor.css"
import Checkbox from '../checkbox'

const FilterColor = () =>  {

    return (
        <div className="checkbox-group">
            <Checkbox label={'красный'}/>
            <Checkbox label={'синий'}/>
            <Checkbox label={'желтый'}/>
            <Checkbox label={'зеленый'}/>
        </div>
        )
}

export default FilterColor;
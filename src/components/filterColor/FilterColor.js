import React from "react";
import "./filterColor.css"
import Checkbox from '../checkbox'

const FilterColor = () =>  {

    return (
        <div className="checkbox-group">
            <Checkbox label={'красный'} id={'red'}/>
            <Checkbox label={'синий'} id={'blue'}/>
            <Checkbox label={'желтый'} id={'yellow'}/>
            <Checkbox label={'зеленый'} id={'green'}/>
        </div>
        )
}

export default FilterColor;
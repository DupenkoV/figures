import React from "react";
import "./filterColor.css"

const FilterColor = () =>  {

    return (
        <div className="checkbox-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="red" />
            <label className="form-check-label" htmlFor="red">
                красные
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="green" />
            <label className="form-check-label" htmlFor="green">
                зеленые
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="blue" />
            <label className="form-check-label" htmlFor="blue">
                синие
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="yellow" />
            <label className="form-check-label" htmlFor="yellow">
                желтые
            </label>
            </div>
        </div>
        )
}

export default FilterColor;
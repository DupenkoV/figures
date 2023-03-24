import React from "react";
import "./filterShapes.css"

const FilterShapes = () => {
    return (
        <div className="checkbox-group shapes">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="circles" />
            <label className="form-check-label" htmlFor="circles">
                Круги
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="squares" />
            <label className="form-check-label" htmlFor="squares">
                Квадраты
            </label>
            </div>
        </div>
    )
}
export default FilterShapes;
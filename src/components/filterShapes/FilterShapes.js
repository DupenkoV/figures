import React from "react";
import "./filterShapes.css"

export default class FilterShapes extends React.Component {
    render() {
        return (
            <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                <label className="btn btn-primary" htmlFor="btncheck1">Круг</label>
                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                <label className="btn btn-primary" htmlFor="btncheck2">Квадрат</label>
            </div>
        )
    }
}
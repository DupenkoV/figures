import React from "react";
import "./radio.css"

export default class Radio extends React.Component {
    render() {
        return (
            <>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="all" defaultChecked/>
                    <label className="form-check-label" htmlFor="all">
                        все
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="dark"  />
                    <label className="form-check-label" htmlFor="dark">
                        темные
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="light" />
                    <label className="form-check-label" htmlFor="light">
                        светлые
                    </label>
                </div>
            </>
        )
    }
}
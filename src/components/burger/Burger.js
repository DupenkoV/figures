import React from "react";
import "./burger.css"

import FilterColor from "../filterColor/FilterColor";
import Radio from "../Radio/Radio";
import InputColumn from "../inputColumn/inpitColumn";

export default class Burger extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false,
        }
    }
    

    activated = () => {
        this.setState({active: true})
    }

    render() {
        if(this.state.active) {
            return (
                <>
                    <FilterColor />
                    <Radio />
                    <InputColumn getNumberOfColumns={this.props.getNumberOfColumns}/>
                </>
            )
        }
        return (
            <div className="burger"
                onClick={this.activated}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}
import React from "react";
import "./figures.css"

import { connect } from 'react-redux';

const Figures = (props) => {
    const figures = props.shapes.map((item, id) => {

        return (
        <div className={`figure ${item.color} ${item.form}`} key={id}> </div>
        )
    })
    return  (               
            <div className={"container box"} >
                {figures}
            </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {state}
}

console.log(mapStateToProps())

export default connect(mapStateToProps)(Figures);
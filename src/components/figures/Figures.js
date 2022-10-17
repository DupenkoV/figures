import React from "react";
import "./figures.css"

export default class Figures extends React.Component {
    state = {
        shapes: this.props.shapes
    }


    render() {                
        const figures = this.state.shapes.map((item, id) => {

            return (
            <div className={`figure ${item.color} ${item.form}`} key={id}> </div>
            )
        })
        
        
        return (
            <div className="container box">
                {figures}
            </div>
        )
    }
}
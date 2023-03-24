import React from "react";
import "./figures.css"
import { useSelector } from "react-redux";



export const Figures = ({shapes}) => {
    const numberOfColumns = useSelector(state => state.numberOfColumns)
    const figures = shapes.map((item, id) => {

        return (
        <div className={`figure ${item.color} ${item.form}`} key={id}> </div>
        )
    })
    return  (               
            <div className={`container box${numberOfColumns}`} >
                {figures}
            </div>
    )
}



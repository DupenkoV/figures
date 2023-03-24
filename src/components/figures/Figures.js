import React  from "react";
import "./figures.css"
import { useSelector } from "react-redux";




export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)
    const shapes = useSelector(state => state.shapes)
    
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



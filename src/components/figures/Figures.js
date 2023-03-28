import React  from "react";
import "./figures.css"
import { useFigure } from "./useFigures";
import { useSelector } from "react-redux";





export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)
    const shapes = useFigure()
    
    return  (               
            <div className={`container box${numberOfColumns}`} >
                {shapes.map((item) => {
                return (
                <div className={`figure ${item.color} ${item.form}`} key={item.id}> </div>
                )
                })}
            </div>
    )
}



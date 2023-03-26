import React  from "react";
import "./figures.css"
import { useFigure } from "./useFigures";
import { useSelector } from "react-redux";





export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)


    return  (               
            <div className={`container box${numberOfColumns}`} >
                {useFigure().map((item, id) => {
                return (
                <div className={`figure ${item.color} ${item.form}`} key={id}> </div>
                )
                })}
            </div>
    )
}



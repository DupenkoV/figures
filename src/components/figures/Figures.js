import React, {useCallback, useEffect, useState}  from "react";
import "./figures.css"
import { useFigure } from "./useFigures";
import { useSelector } from "react-redux";





export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)
    let shapes = useFigure()

    return  (               
            <div className={`container box${numberOfColumns}`} >
                {shapes.map((item, id) => {
                return (
                <div className={`figure ${item.color} ${item.form}`} key={id}> </div>
                )
                })}
            </div>
    )
}



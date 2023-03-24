import React, { useEffect }  from "react";
import "./figures.css"
import { useSelector, useDispatch } from "react-redux";
import { addFilter } from "../../slice/shapesSlice";
import { filteredFhapes } from "../../slice/shapesSlice";




export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)
    const shapes = useSelector(state => state.shapes)
    const filter = useSelector(state => state.filter)
    console.log(filteredFhapes(shapes, filter))
    const dispatch = useDispatch()


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



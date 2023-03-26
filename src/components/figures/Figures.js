import React, { useEffect }  from "react";
import "./figures.css"
import { useSelector, useDispatch } from "react-redux";





export const Figures = () => {
    const numberOfColumns = useSelector(state => state.numbersOfColumn)
    const shapes = useSelector(state => state.shapes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const shapes2 = shapes.filter(item => {
        const color = item.color;
        const form = item.form
        return color == filter.find((item) => item === color) && filter.find((item) => item === form)
    })


    const figures = shapes2.map((item, id) => {

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



import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./radio.css"
import { getAll, getDark, getLigth } from "../../slice/shapesSlice";

export const Radio = () => {
    const [shade, setShade] = useState('all')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setShade(e.target.value)
    }

    useEffect(() => {
        if(shade === 'all') {
            dispatch(getAll())
        } else if(shade === 'dark') {
            dispatch(getDark()) 
        } else {
            dispatch(getLigth())
        }
    }, [shade, dispatch])
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" value={'all'} id="all"
                    checked={shade === 'all' ? true : false} 
                    onChange={handleChange}/>
                <label className="form-check-label" htmlFor="all">
                    все
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" value={'dark'} id="dark" 
                 checked={shade === 'dark' ? true : false} 
                 onChange={handleChange}/>
                <label className="form-check-label" htmlFor="dark">
                    темные
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" value={'light'} id="light" 
                checked={shade === 'light' ? true : false} 
                onChange={handleChange}/>
                <label className="form-check-label" htmlFor="light">
                    светлые
                </label>
            </div>
        </>
    )
}
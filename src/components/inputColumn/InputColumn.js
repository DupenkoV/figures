import {React} from "react";
import { useDispatch } from "react-redux";
import "./inputColumn.css"
import { selectNumbers } from "../../slice/numbersOfColumn";


const InputColumn  = () =>  {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.value > 4) {
            e.target.value = 4
        }
        dispatch(selectNumbers(+e.target.value))
    }
    return (
        <div className="form-group">
            <label htmlFor="column" className="form-label mt-4">колонок</label>
                <br />
                <input placeholder="4" type='number' min="1" max="4" onChange={(e) => {handleChange(e)}}/>
        </div>
    )
}


export default InputColumn;
import {React} from "react";
import { useDispatch } from "react-redux";
import "./inputColumn.css"
import { selectNumbers } from "../../slice/numbersOfColumn";


const InputColumn  = (props) =>  {
    const dispatch = useDispatch();

    return (
        <div className="form-group">
            <label htmlFor="column" className="form-label mt-4">колонок</label>
                <br />
                <input placeholder="4" onChange={(e) => {dispatch(selectNumbers(+e.target.value))}}/>
        </div>
    )
}


export default InputColumn;
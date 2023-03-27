import React, { useState } from 'react'
import './checkbox.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../slice/filterSlice'


export const Checkbox = ({label, id}) => {
  const selector = useSelector(state => state.filter.find(item => item === id))

  const [checked, setChecked] = useState(selector)
  
  const dispatch = useDispatch()
  const handleChange = () => {
    setChecked(!checked)
    dispatch(setFilter(id))
  }


  return (
    <div>
        <label>
            <input type='checkbox' checked={!checked} onChange={handleChange} className='checkbox' id={id}/>
            {label}
        </label>
    </div>
  )
}

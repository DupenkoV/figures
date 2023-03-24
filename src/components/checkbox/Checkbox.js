import React from 'react'
import './checkbox.css'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../slice/filterSlice'


export const Checkbox = ({label}) => {
  const checked = useSelector(state => state.filter[label])
  
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch(setFilter({
        label,
        checked: !checked
    }))
  }

  return (
    <div>
        <label>
            <input type='checkbox' checked={checked} onChange={handleChange} className='checkbox'/>
            {label}
        </label>
    </div>
  )
}

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputWord } from '../redux/reducers/inputSlice'
const Input = () => {
const [input, setInput] = useState("")
const dispatch = useDispatch()

const handleChange = (e) =>{
    const value = e.target.value
    setInput(value)
    console.log(value);

}

const handleClick=()=>{
dispatch(input)
}

const handleDelete=()=>{
  dispatch(inputWord())
}

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}/>
      <button onClick={handleClick} >ADD</button>
      <button>delete</button>
      <li>{input}</li>
    </div>
  )
}

export default Input

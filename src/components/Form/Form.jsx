import {nanoid} from "@reduxjs/toolkit";
import {addToDo} from "../../redux/toDoSlice.js";
import {useDispatch} from "react-redux";

export const Form =()=>{
    const dispatch = useDispatch()
    const hendleSubmit =e=>{
        e.preventDefault()
        const {value} = e.target.elements.text
        dispatch(addToDo({text: value, id:nanoid()}))
        e.target.reset()
    }
    return <form onSubmit={hendleSubmit}>
        <input name='text' type="text"/>
        <button type='submit'>Submit</button>
    </form>
}
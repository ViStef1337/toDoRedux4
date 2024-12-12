import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filterSlice.js";

export const Filter =()=>{
    const dispatch = useDispatch()
    const hendleFilter =e=>{
        const action = setFilter(e.target.value)
        dispatch(action)
    }
    return <input onChange={hendleFilter} type="text"/>
}
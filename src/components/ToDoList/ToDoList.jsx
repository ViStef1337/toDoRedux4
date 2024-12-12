import {useDispatch, useSelector} from "react-redux";
import {deleteToDo} from "../../redux/toDoSlice.js";
import {selectFilter, selectToDos} from "../../redux/selectors.js";

export  const ToDoList =()=>{
    const toDos = useSelector(selectToDos)
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()

    const filteredToDos = toDos.filter(item=>item.text.toLowerCase().includes(filter.toLowerCase()))
    const hendleDelete = id=>{
        dispatch(deleteToDo(id))
    }
    return <ul>
        {filteredToDos.map(item=><li key={item.id}>{item.text} <button onClick={()=>hendleDelete(item.id)}>Delete</button></li>)}
    </ul>
}
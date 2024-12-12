import {useSelector} from "react-redux";

export const selectToDos = state => state.toDos.items
export const selectFilter = state => state.filter.text
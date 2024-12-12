import {createSlice} from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {items : []},
    reducers: {
        addToDo(state , action){
            state.items.push(action.payload)
        },
        deleteToDo(state,action){
            state.items = state.items.filter(item=>item.id!==action.payload)
        }
    }
})

export  const {addToDo,deleteToDo} = toDoSlice.actions
export const toDoReducer = toDoSlice.reducer
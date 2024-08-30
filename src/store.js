import { createStore } from "redux"

let initialState = {
    todo:[],
    id:0
}

function todoReducer(state=initialState,action)
{
    switch(action.type)
    {
        case 'AddTodo':
            const newTodo = {id:state.id,title:action.payload.title}
            return {
                ...state,todo:[...state.todo,newTodo],id:state.id+1
            }
        
        case 'UpdateTodo':
            return {
                ...state,todo:state.todo.map((t)=>t.id===action.payload.id?{...t,title:action.payload.title}:t)
            }

        case 'DeleteTodo':
            return {
                ...state,todo:state.todo.filter((t)=>t.id!==action.payload)
            }

        default:
            return state
    }
}

let store = createStore(todoReducer)
export default store
import { Data } from "Redux/constants/todoData"
import { ACTIONS } from 'Redux/constants/todoActionsType'

export default function todoReducer(state = Data, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODOLIST: {
            action.payload.id = state.length + 1
            return [...state, action.payload]
        }
        case ACTIONS.EDIT_TODOLIST: {
            let newState = state.slice(0)
            for (let i = 0; i <= newState.length - 1; i++) {
                if (newState[i].id === action.payload.id) {
                    newState.splice(i, 1, action.payload)
                    break;
                }
            }
            return newState
        }
        case ACTIONS.DELETE_TODOLIST: {
            return state.filter(state => state.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}
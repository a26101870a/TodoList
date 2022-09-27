import { ACTIONS } from 'Redux/constants/todoActionsType'

export const addTodoList = todoList => ({
    type: ACTIONS.ADD_TODOLIST,
    payload: todoList
})

export const editTodoList = todoList => ({
    type: ACTIONS.EDIT_TODOLIST,
    payload: todoList
})

export const deleteTodoList = todoList => ({
    type: ACTIONS.DELETE_TODOLIST,
    payload: todoList
})
import { createStore } from "redux";
import todoReducer from "Redux/reducers/todoReducer"

export const todoStore = createStore(todoReducer)
import { combineReducers } from 'redux';
import {todosReducer} from "./todos"
import {Todo} from "../actions"

//This ensures that the reducers defined by the keys actually returns the part of the store as declared here
export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});

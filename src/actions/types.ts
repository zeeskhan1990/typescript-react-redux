import {FetchTodosAction, DeleteTodoAction} from "./todos"

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

//To be used in reducers to specify the type of action
export type Action = FetchTodosAction | DeleteTodoAction
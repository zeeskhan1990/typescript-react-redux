import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    //This switch case acts as a type guard
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state;
  }
};

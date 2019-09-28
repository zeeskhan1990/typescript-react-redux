import React from 'react';
import {connect} from "react-redux"
import {Todo, fetchTodos, deleteTodo} from "../actions"
import {StoreState} from "../reducers"

export interface AppProps {
  todos: Todo[],
  /* This should be ideally but redux connect type def doesn't consider that this can return a function as in the case of thunk
  fetchTodos: typeof fetchTodos, */
  fetchTodos: Function,
  deleteTodo: typeof deleteTodo
}

interface AppState {
  //ideally should be in redux store state
  loading: boolean
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)
    //Check the caveat file to understand why this approach to set state
    this.state = {loading: false}
  }

  componentDidUpdate(prevProps: AppProps): void {
    //first time only
    if(!prevProps.todos.length && this.props.todos.length) {
      this.setState({loading: false})
    }
  }

  clicked = () => {
    this.props.fetchTodos()
    this.setState({loading: true})
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
          <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
            {todo.title}
          </div>
      );
    });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  render() {
    console.log(this.props.todos)
    return (
      <React.Fragment>
        <button onClick={this.clicked}>Fetch Todos</button>
        {this.state.loading ? 'Loading...' : null}
        {this.renderList()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
  return {todos: state.todos}
}
/* fetchTodos is a special redux thunk enabled action creator
so mapDispatchToProps is now {'fetchTodos' : fetchTodo} */
const mapDispatchToProps = {fetchTodos, deleteTodo}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)

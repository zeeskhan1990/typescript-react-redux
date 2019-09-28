import React from 'react';
import ReactDOM from "react-dom"

export interface Props {
    color: string
    shape?: string
}
 
export interface State {
    counter?: number
}
 
class App extends React.Component<Props, State> {

    state  = {counter: 0}

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    };

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 });
    };
    render() { 
        return ( 
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.props.color}
                {this.state.counter}
            </div>
         );
    }
}

ReactDOM.render(<App color="red"/>, document.querySelector('#root'))
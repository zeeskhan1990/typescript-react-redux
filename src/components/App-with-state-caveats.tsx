import React from 'react';

export interface AppProps {
    color: string
    shape?: string
}
 
export interface AppState {
    counter?: number
}

/**
 * In the Component class, the state is defined as `state: Readonly<S>;`. This has implications :
 * So if inside the constructor `this.state` is set, then it ends up setting the value of the 
 * `state` property defined in the parent Component. Also `S` matches with the state type generic
 * being passed in, so the `state` property would be the value set in the constructor with 
 * it's type being `Readonly<AppState>`. 
 * BUT, if you define state as a class property in the manner `state = <Your state here>`, then
 * what you are ending up doing here is that you are over-riding the parent's state property completely
 * and that is no longer `Readonly<S>` but is the value you had defined during the initialization. And,
 * as a result the state generic being passed in also loses it's significance. 
 */
export class MyApp extends React.Component<AppProps> {

    state  = {counter: 0}

    constructor(props: AppProps) {
        super(props)
        //this.state = {counter: 0}
    }

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

/* const App = (props:AppProps): JSX.Element => {
    return <div>{props.color}</div>
} */

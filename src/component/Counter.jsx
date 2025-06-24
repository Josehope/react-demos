import { useReducer, useState } from "react";

import { counterReducer, initiateState } from "./CounterReducer";

const Counter = () => {

    const [ state, dispatch] = useReducer(counterReducer, initiateState)

    const [ inputValue, setInputValue ] = useState(0)


    const handleIncrement = () => dispatch({ type: "increment"})
    const handleDecrement = () => dispatch({ type: "decrement"})

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

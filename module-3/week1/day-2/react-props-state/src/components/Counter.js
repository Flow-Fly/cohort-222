import { useState } from "react";

function Counter() {
  const [ state, setState ] = useState(0); // The parameter will be the initial value of the state

  const substractValue = () => {
    
  }
  const addValue = () => {
    
  }

  return (
    <div>
      <h4>Value: {state}</h4>
      <button onClick={() => setState(state - 1)}>Substract</button>
      <button onClick={() => setState(state + 1)}>Add</button>
    </div>
  )
}

export default Counter;
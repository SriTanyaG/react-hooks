import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state,action) => {
    switch(action.type){   //We are able to access the action with type and value, as we are adding these attributes in jsx, dispatch
        case 'increment':
            return {...state, firstCounter : state.firstCounter + action.value} // We are adding spread operator FOR PATCH OPERATION
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count.firstCounter}</div>
        <button onClick={()=>dispatch({type :'increment',value:1})}>Increment</button>   
      <button onClick={()=>dispatch({type :'decrement',value:1})}>Decrement</button>
      <button onClick={()=>dispatch({type :'increment',value:5})}>Increment 5</button>   
      <button onClick={()=>dispatch({type :'decrement',value:5})}>Decrement 5</button>
      <button onClick={()=>dispatch({type :'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo

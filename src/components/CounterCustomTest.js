import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CounterCustomTest() {
    const [count,increment,decrement,reset] = useCounter()
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div>Count - {count}</div>
    </div>
  )
}

export default CounterCustomTest

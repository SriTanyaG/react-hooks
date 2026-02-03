import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const[count,setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
      Count : {count}
      <div></div>
      <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Loop Inc 5</button>
      {/* The “old value” is only old within one render.
        A new click creates a new render with a new value. */}
    </div>
  )
}

export default HookCounterTwo

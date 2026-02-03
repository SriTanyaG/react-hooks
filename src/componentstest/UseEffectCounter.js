import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count,setCount] = useState(0)
    // Also a function, we pass in a parameter to the useEffect function, this parameter is a function which gets executed after every render of the component
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
  return (
    <div>
      <button onClick={()=> setCount(count +1 )}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectCounter

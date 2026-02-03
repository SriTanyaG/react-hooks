import React , {useState} from 'react'

function HookCounter() {
      //This hook accepts the initial value of the state property, return the current value of state property 
    // and provides a meathod for updating the sate property
    const [count,count2,setCount] = useState(0,1)  //array destructuring

  return (
    <div>
      <button onClick={() => setCount(count+1,count2+5)}>Count {count}</button>  
      {/* Using arrow function when if we pass parameters for 
      a function and we dont want it to execute immediately and execute only when there is a call 
      without arrow function, it would run on render, rather than on cli*/}
      {/* by just passing the function without any parathesis will not require arrow function */}
    </div>
  )
}

export default HookCounter

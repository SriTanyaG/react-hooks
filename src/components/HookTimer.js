import React,{useEffect, useState, useRef} from 'react'
// To hold the timer value we need a state variable, so we are using useState

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    },[])
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={()=> clearInterval(intervalRef.current)}>CLear Hook timer</button>
    </div>
  )
}

export default HookTimer

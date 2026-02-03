import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
    </div>
  )
}

export default MouseContainer

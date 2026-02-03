import React , {useState} from 'react'

function HookCounterFour() {
    const [items, setCount] = useState([0,0])

    // const addItem = () => {
    //     setItems([...items,{
    //         id: items.length,
    //         value : Math.floor(Math.random()*10) + 1
    //     }])
    // }
  return (
    <div>
        {/* <button onClick={addItem}>Add a number</button> */}
        <button onClick={() => setCount(items[0]+1,items[1]+2)}>Add a number {items[0]}</button>

        {/* <ul>
            {items.map(item => (
                <li key = {item.id}>{item.value}</li>
            ))

            }
        </ul> */}
    </div>
  )
}

export default HookCounterFour

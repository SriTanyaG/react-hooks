import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [firstName, Firstbind, Firstreset] = useInput('')
    const [lastName, Lastbind, Lastreset] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        Firstreset()
        Lastreset()
    }
    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>FirstName</label>
                <input {...Firstbind} type='text'></input>
            </div>
            <div>
                <label>LastName</label>
                <input {...Lastbind} type='text'></input>
            </div>
            <div>
                <button>Submit</button>
            </div>

        </form>
      
    </div>
  )
}

export default UserForm

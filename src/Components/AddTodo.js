import React from 'react'

function AddTodo({addTodo}) {
  return (
    <button onClick={() => addTodo()} className='todo-button'>
            Add Pokemon
    </button>
  )
}

export default AddTodo
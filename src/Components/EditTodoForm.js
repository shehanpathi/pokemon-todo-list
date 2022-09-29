import React from 'react';
import useEditTodoFormHook from '../Hooks/useEditTodoFormHook';

function EditTodoForm({id, submitUpdate}) {
    
    const {
        input,
        handleChange,
        handleSubmit
    } = useEditTodoFormHook(id, submitUpdate);

    return (
        <form>
            <input
                placeholder='Update pokemon'
                value={input}
                onChange={handleChange}
                name='text'
                className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
        </form>
    )
}

export default EditTodoForm
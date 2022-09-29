import { useState } from 'react';

const useEditTodoFormHook = (id, submitUpdate) => {
    const [input, setInput] = useState('');


    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        submitUpdate(id, input)
        setInput('');
    };

    return{
        input,
        setInput,
        handleChange,
        handleSubmit
    }

}

export default useEditTodoFormHook;
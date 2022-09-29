import { useState } from 'react';

const useTodoHook = (updateTodo) => {
    const [edit, setEdit] = useState({
        id: null,
        name: ''
    });

    const submitUpdate = (id, name) => {
        updateTodo(id, name);
        setEdit({
            id: null,
            name: ''
        });
    };

    return{
        edit,
        setEdit,
        submitUpdate
    }

}

export default useTodoHook;
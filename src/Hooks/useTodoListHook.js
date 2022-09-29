import { useState } from 'react';
import { getRequest } from '../Services/axiosClient';

const useTodoListHook = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = async () => {
        const limit = todos.length + 1;
        const offset = todos.length;

        try{
            const response = await getRequest(`pokemon?limit=${limit}&offset=${offset}`);
            const newTodos = [{ id: todos.length + 1, name: response.data.results[0].name }, ...todos];
            setTodos(newTodos);
        }
        catch(error){
            console.log(error);
        }

    };

    const updateTodo = (todoId, todoName) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? { id: todoId, name: todoName } : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    return{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        removeTodo
    }

}

export default useTodoListHook;
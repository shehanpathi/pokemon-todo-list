import React from 'react';
import useTodoHook from '../Hooks/useTodoHook';
import EditTodo from './EditTodoForm';

const Todo = ({ todos, removeTodo, updateTodo }) => {

  const {edit, setEdit, submitUpdate}  = useTodoHook(updateTodo);

  if (edit.id) {
    return <EditTodo id={edit.id} submitUpdate={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className='todo-row'
    >
      <div key={todo.id}>
        {todo.name.toUpperCase()}
      </div>
      <div className='icons'>
      <div
          onClick={() => setEdit({ id: todo.id, name: todo.name })}
          className='edit-icon'
        ><i className="fa fa-edit"></i></div>
        <div
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        ><i className="fa fa-trash"></i></div>
        
      </div>
    </div>
  ));
};

export default Todo;

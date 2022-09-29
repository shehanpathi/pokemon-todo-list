import React from 'react';
import Todo from '../Components/Todo';
import AddTodo from '../Components/AddTodo';
import useTodoListHook from '../Hooks/useTodoListHook';

function TodoList() {
  const {
    todos,
    addTodo,
    updateTodo,
    removeTodo
} = useTodoListHook();

  return (
    <>
      <h1>Pokemon List</h1>
      <h5>Count: {todos.length}</h5>
      <AddTodo addTodo={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;

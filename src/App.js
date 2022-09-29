import React from 'react';
import './App.css';
import TodoList from './Pages/TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='todo-app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((response) => response.json())
      .then((json) => json.map((item) => ({ id: item.id, completed: false, title: item.title, subtitle: ((Math.random() - 0.75) >= 0) ? item.title : '' })))
      .then((json) => (setTodos(json)))
  }, [])


  return (
    <div className="container">

      <header className='header'>
        <h1>Todo list</h1>
        <button className='button button__add'>ADD</button>
      </header>

      <TodoList todos={todos} />
    </div>
  );
}

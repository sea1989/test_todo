import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, changeComplete }) {

  const changeDone = (id) => {
    changeComplete(id);
  }

  return (
    <ul>
      {todos.map(item => <TodoItem onChange={changeDone} key={item.id} {...item} />)}
    </ul>
  )
}
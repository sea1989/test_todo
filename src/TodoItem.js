import React, { useState } from 'react'

export default function TodoItem({ title, id, completed, subtitle, onChange }) {

  const handleClick = () => {
    onChange(id);
  }

  return (
    <li className={`todo ${{ completed } ? "completed" : ''}`}>

      <label>

        <input
          type="checkbox"
          checked={completed}
          onChange={handleClick}
        />

        <span></span>

        <div className='title__wrapper'>
          <span className='title'>{title}</span>
          <span className='subtitle'>{subtitle}</span>
        </div>

      </label>
    </li>
  )
}
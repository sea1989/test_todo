import React, { useState } from 'react'

export default function TodoItem({ title, id, completed, subtitle, onChange }) {

  const [checked, setChecked] = useState(completed)

  const handleClick = () => {
    setChecked(!checked);
    onChange(id);
  }

  return (
    <li className={`todo ${checked ? "completed" : ''}`}>

      <label>

        <input
          type="checkbox"
          checked={checked}
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
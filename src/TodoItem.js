import React, { useState } from 'react'

export default function TodoItem({ title, id, completed, subtitle, onChange }) {

  const [checked, setChecked] = useState(completed)

  const cls = ['todo']

  if (checked) {
    cls.push('completed')
  }

  const handleClick = () => {
    setChecked(!checked);
    onChange(checked, id);
  }

  return (
    <li className={cls.join(' ')}>

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
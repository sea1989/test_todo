import React, { useState } from 'react'

export default function TodoItem({ title, id, completed, subtitle }) {

  const [checked, setChecked] = useState(completed)

  const cls = ['todo']

  if (checked) {
    cls.push('completed')
    completed = !completed
  }

  return (
    <li className={cls.join(' ')}>

      <label>

        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
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
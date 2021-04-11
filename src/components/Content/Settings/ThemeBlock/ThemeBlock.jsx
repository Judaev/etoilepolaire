import React, { useState } from 'react'
import style from './ThemeBlock.module.css'

const ThemeBlock = () => {
  const [theme, setTheme] = useState(false)

  return (
    <div className={style.main}>
      <div className={style.title}>
        { theme ? 'Светлая тема' : 'Темная тема'}  
      </div>
      <button onClick={() => setTheme(!theme)} >Изменить тему</button>
    </div>
  )
}

export default ThemeBlock
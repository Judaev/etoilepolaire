import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Services.module.css'

const Services = () => {
  return (
    <div>
      <div className={style.title}>Services Item</div>
      <div className={style.items}>
        <NavLink to='/chatbot'>Чат бот</NavLink> 
      </div>
    </div>
  )
}

export default Services
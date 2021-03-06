import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Settings.module.css'

const Settings = (props) => {
  return (
    <div className={style.item}>
      <NavLink to='./settings'>
        <img className={style.icon}  src="https://www.flaticon.com/svg/static/icons/svg/503/503822.svg" alt=""/>  
      </NavLink>
      
    </div>
  )
}

export default Settings
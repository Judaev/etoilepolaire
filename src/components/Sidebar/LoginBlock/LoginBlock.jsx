import React from 'react'
import style from './LoginBlock.module.css'
import { NavLink } from 'react-router-dom'

const LoginBlock = (props) => {
  return (
    <div>
      <div className={style.item}>
        <div className={style.title}>Login - </div>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}  
      </div>
    </div>
  )
}

export default LoginBlock

import React from 'react'
import style from './LoginBlock.module.css'
import { NavLink } from 'react-router-dom'

const LoginBlock = (props) => {
  return (
    <div>
      <div className={style.item}>
        <div className={style.title}>Вы вошли как - </div>
        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Выйти</button> </div>  : <NavLink to="/login">Login</NavLink>}  
      </div>
    </div>
  )
}

export default LoginBlock

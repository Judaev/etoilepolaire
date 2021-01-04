import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginBlock = (props) => {
  return (
    <div>
      {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
    </div>
  )
}

export default LoginBlock

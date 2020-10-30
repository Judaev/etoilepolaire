import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.main} >
      <div className={style.item} activeClassName={style.active} >
        <img src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg" activeClassName={style.active} className={style.photo}/>
        <NavLink to='/home' className={style.navlink} activeClassName={style.activeText} >Home</NavLink>
      </div>
      <div className={style.item}>
        <img src="https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg" className={style.photo}/>
        <NavLink to='/messages' className={style.navlink} activeClassName={style.activeText}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <img src="https://www.flaticon.com/svg/static/icons/svg/3039/3039404.svg" className={style.photo}/>
        <NavLink to='/music' className={style.navlink} activeClassName={style.activeText}>Music</NavLink>
      </div><div className={style.item}>
        <img src="https://www.flaticon.com/svg/static/icons/svg/930/930211.svg" className={style.photo}/>
        <NavLink to='/services' className={style.navlink} activeClassName={style.activeText}>Services</NavLink>
      </div>
    </div>
  )
}

export default Navbar
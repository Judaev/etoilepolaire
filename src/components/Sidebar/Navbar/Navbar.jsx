import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import { SNavbarContainer, SNavbarItem, SNavbarItemTitle } from './navbar.styled'

const Navbar = () => {
  return (
    <SNavbarContainer>
      <SNavbarItem>
        <img src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg" className={style.photo}/>
        <NavLink to='/home' className={style.navlink} activeClassName={style.activeText}>Home</NavLink>
      </SNavbarItem>
      <SNavbarItem>
        <img src="https://www.flaticon.com/svg/static/icons/svg/860/860784.svg" className={style.photo}/>
        <NavLink to='/profile' className={style.navlink} activeClassName={style.activeText}>Profile</NavLink>
      </SNavbarItem>
      <SNavbarItem>
        <img src="https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg" className={style.photo}/>
        <NavLink to='/messages' className={style.navlink} activeClassName={style.activeText}>Messages</NavLink>
      </SNavbarItem>
      <SNavbarItem>
        <img src="https://www.flaticon.com/svg/static/icons/svg/3039/3039404.svg" className={style.photo}/>
        <NavLink to='/music' className={style.navlink} activeClassName={style.activeText}>Music</NavLink>
      </SNavbarItem>
      <SNavbarItem>
        <img src="https://www.flaticon.com/svg/static/icons/svg/930/930211.svg" className={style.photo}/>
        <NavLink to='/services' className={style.navlink} activeClassName={style.activeText}>Services</NavLink>
      </SNavbarItem>  
    </SNavbarContainer>
  )
}

export default Navbar
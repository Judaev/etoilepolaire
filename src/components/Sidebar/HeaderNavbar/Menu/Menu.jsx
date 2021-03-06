import React from 'react'
import style from './Menu.module.css'

const Menu = (props) => {
  let hideSidebarStyles = false

  let hideSidebar = () => {
    hideSidebarStyles = true
  }


  return (
    <div onClick={hideSidebar} className={style.item + ' ' + (hideSidebarStyles ? style.hide : '')}>
      <img className={style.icon} src="https://www.flaticon.com/svg/static/icons/svg/966/966313.svg" alt=""/>
    </div>
  )
}

export default Menu


import React from 'react'
import style from './HeaderNavbar.module.css'
import Menu from './Menu/Menu'
import Settings from './Settings/Settings'

const HeaderNavbar = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <Menu hideSidebar={props.hideSidebar} />
      </div>
      <div className={style.text}>Étoile Polaire</div>
      <div className={style.item}>
        <Settings />
      </div>
    </div>
  )
}

export default HeaderNavbar
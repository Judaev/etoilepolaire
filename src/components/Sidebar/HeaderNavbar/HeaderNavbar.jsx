import React from 'react'
import style from './HeaderNavbar.module.css'

const HeaderNavbar = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>X</div>
      <div className={style.item}>Étoile Polaire </div>
      <div className={style.item}><img src="https://www.flaticon.com/svg/static/icons/svg/503/503822.svg" alt="" /></div>
    </div>
  )
}

export default HeaderNavbar
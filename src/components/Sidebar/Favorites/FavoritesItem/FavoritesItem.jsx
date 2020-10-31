import React from 'react'
import style from './FavoritesItem.module.css'

const FavoritesItem = (props) => {
  return (
    <div className={style.item}>
      <div>
        <img className={style.icon} src="https://www.flaticon.com/svg/static/icons/svg/3221/3221848.svg" alt=""/>
      </div>
      <div>
        <span className={style.title}>title</span>
      </div>
    </div>
  )
}

export default FavoritesItem
import React from 'react'
import style from './Favorites.module.css'
import FavoritesItem from './FavoritesItem/FavoritesItem'

const Favorites = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Favorites</div>
      <div className={style.items}>
        <FavoritesItem />
        <FavoritesItem />
        <FavoritesItem />
      </div>
    </div>
  )
}

export default Favorites
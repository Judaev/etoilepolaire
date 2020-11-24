import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = () => {
  return (
    <div className={style.main}>
      <NavLink to='/friends' className={style.title}>
        Friends
      </NavLink>
      <div className={style.items}>
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
      </div>
      <div className={style.items}>
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
        <FriendsItem />
      </div>
    </div>
  )
}

export default Friends
import React from 'react'
import style from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const Friends = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        Friends
      </div>
      <div className={style.items}>
        <FriendsItem />
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
        <FriendsItem />
      </div>
    </div>
  )
}

export default Friends
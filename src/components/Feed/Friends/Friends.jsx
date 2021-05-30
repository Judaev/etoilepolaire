import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'
import { SFriendsContainer } from './friends.styled'

const Friends = () => {
  return (
    <SFriendsContainer>
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
    </SFriendsContainer>
  )
}

export default Friends
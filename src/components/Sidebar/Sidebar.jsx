import React from 'react'
import Favorites from './Favorites/Favorites'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import style from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <HeaderNavbar />
      <Profile />
      <Navbar />
      <Favorites />
    </div>
  )
}

export default Sidebar
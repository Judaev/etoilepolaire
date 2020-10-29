import React from 'react'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Recommend from './Recommend/Recommend'
import style from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <HeaderNavbar />
      <Profile />
      <Navbar />
      <Recommend />
    </div>
  )
}

export default Sidebar
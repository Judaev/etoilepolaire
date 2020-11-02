import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import HeaderHomePage from './HeaderHomePage/HeaderHomePage'
import style from './HomePage.module.css'
import News from './News/News'

const HomePage = (props) => {
  return (
    <div className={style.main}>
      <HeaderHomePage />
      <Dashboard />
      <Dashboard />
      <Dashboard />
      <Dashboard />
      <Dashboard />
      <News />
    </div>
  )
}

export default HomePage
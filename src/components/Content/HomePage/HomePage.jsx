import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import HeaderHomePage from './HeaderHomePage/HeaderHomePage'
import style from './HomePage.module.css'
import NewsContainer from './News/NewsContainer'

const HomePage = (props) => {
  return (
    <div className={style.main}>
      <HeaderHomePage />
      <Dashboard />
      <NewsContainer />
    </div>
  )
}

export default HomePage
import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import HeaderHomePageContainer from './HeaderHomePage/HeaderHomePageContainer'
import style from './HomePage.module.css'
import NewsContainer from './News/NewsContainer'

const HomePage = (props) => {
  return (
    <div className={style.main}>
      {/* <HeaderHomePageContainer /> */}
      {/* <Dashboard /> */}
      <NewsContainer />
    </div>
  )
}

export default HomePage
import React from 'react'
import HeaderHomePage from './HeaderHomePage/HeaderHomePage'
import style from './HomePage.module.css'
import News from './News/News'

const HomePage = (props) => {
  return (
    <div>
      <HeaderHomePage />
      <News />
    </div>
  )
}

export default HomePage
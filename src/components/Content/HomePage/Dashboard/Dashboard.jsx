import React from 'react'
import СurrencyWidget from './СurrencyWidget/СurrencyWidget'
import style from './Dashboard.module.css'
import Weather from './Weather/Weather'
import ComingHolidayWidget from './ComingHolidayWidget/ComingHolidayWidget'
import CalendarWidget from './CalendarWidget/CalendarWidget'
import WelcomeWidget from './WelcomeWidget/WelcomeWidget'

const Dashboard = () => {
  return (
    <div className={style.main}>
      <div>
        <WelcomeWidget />
      </div>
      <div className={style.item}>
        <CalendarWidget />
      </div>
      <div className={style.item}>
        <СurrencyWidget />
        <ComingHolidayWidget />  
      </div>
      <div>
        <Weather /> 
      </div>
    </div>
  )
}

export default Dashboard

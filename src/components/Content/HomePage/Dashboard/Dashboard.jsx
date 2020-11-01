import React from 'react'
import СurrencyWidget from './СurrencyWidget/СurrencyWidget'
import style from './Dashboard.module.css'
import Weather from './Weather/Weather'
import ComingHolidayWidget from './ComingHolidayWidget/ComingHolidayWidget'

const Dashboard = () => {
  return (
    <div className={style.main}>
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

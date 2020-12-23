import React from 'react'
import style from './CalendarWidget.module.css'

const CalendarWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Декабрь</div>
      <div className={style.subtitle}>23</div>
    </div>
  )
}

export default CalendarWidget
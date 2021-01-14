import React from 'react'
import style from './CalendarWidget.module.css'

const CalendarWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Январь</div>
      <div className={style.subtitle}>15</div>
    </div>
  )
}

export default CalendarWidget
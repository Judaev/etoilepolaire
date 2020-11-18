import React from 'react'
import style from './CalendarWidget.module.css'

const CalendarWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Ноябрь</div>
      <div className={style.subtitle}>18</div>
    </div>
  )
}

export default CalendarWidget
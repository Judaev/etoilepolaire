import React from 'react'
import style from './CalendarWidget.module.css'

const CalendarWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Март</div>
      <div className={style.subtitle}>06</div>
    </div>
  )
}

export default CalendarWidget

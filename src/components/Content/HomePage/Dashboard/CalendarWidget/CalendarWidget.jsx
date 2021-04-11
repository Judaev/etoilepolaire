import React from 'react'
import style from './CalendarWidget.module.css'

const CalendarWidget = () => {
  let getClock = () => {
    let currentdate = new Date()
    let days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ]
    let day = days[currentdate.getDay()]
    let datetime =
      currentdate.getDate() +
      ' ' +
      day
      
    return datetime
  }

  

  return (
    <div className={style.main}>
      <div className={style.title}>Апрель</div>
      {/* <div className={style.subtitle}>11</div> */}
      <div>
        { getClock() }  
      </div>
      
    </div>
  )
}

export default CalendarWidget

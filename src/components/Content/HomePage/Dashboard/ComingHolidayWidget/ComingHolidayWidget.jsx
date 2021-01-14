import React from 'react'
import style from './ComingHolidayWidget.module.css'

const ComingHolidayWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Coming Holiday</div>
      <div>
        <div className={style.subtitle}>Поздравляем с новым годом!</div>
        <div className={style.item}>
          <img className={style.icon} src="https://www.flaticon.com/svg/static/icons/svg/191/191382.svg" alt=""/>
          <div className={style.days}></div> 
        </div>
      </div>
    </div>
  )
}

export default ComingHolidayWidget

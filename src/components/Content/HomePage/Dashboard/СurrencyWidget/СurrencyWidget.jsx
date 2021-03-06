import React from 'react'
import style from './СurrencyWidget.module.css'

const СurrencyWidget = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Курс доллара</div>
      <div className={style.item}>Доллар: 74,34 рублей</div>
      <div className={style.item}>Евро: 88,55 рублей</div>
    </div>
  )
}

export default СurrencyWidget

import React from 'react'
import style from './WelcomeWidget.module.css'

const WelcomeWidget = () => {
  return (
    <div className={style.main}>
      <h2 className={style.title}>Добро пожаловать в <span className={style.name}>Étoile Polaire</span></h2>
    </div>
  )
}

export default WelcomeWidget
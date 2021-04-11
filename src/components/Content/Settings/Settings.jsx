import React from 'react'
import LoginBlockContainer from '../../Sidebar/LoginBlock/LoginBlockContainer'
import AdviceBlock from './AdviceBlock/AdviceBlock'
import SafetyBlock from './SafetyBlock/SafetyBlock'
import style from './Settings.module.css'
import PersonalDataBlock from './PersonalDataBlock/PersonalDataBlock'
import NotificationsBlock from './NotificationsBlock/NotificationsBlock'
import ServicesBlock from './ServicesBlock/ServicesBlock'
import safety from '../../../img/Settings/safety.svg'
import user from '../../../img/Settings/user.svg'
import chat from '../../../img/Settings/chat.svg'
import services from '../../../img/Settings/services.svg'
import ThemeBlock from './ThemeBlock/ThemeBlock'


const Settings = () => {
  return (
    <div>
      <div>
        <p className={style.title}>Настройки</p>
        <div className={style.loginBlock}>
          <LoginBlockContainer />
        </div>
        <div className={style.adviceBlock}>
          <AdviceBlock />
        </div>
        <div className={style.safetyBlock}>
          <SafetyBlock />
          <img className={style.icons} src={safety} alt=""/>
        </div>
        <div className={style.safetyBlock}>
          <PersonalDataBlock />
          <img className={style.icons} src={user} alt=""/>
        </div>
        <div className={style.safetyBlock}>
          <NotificationsBlock />
          <img className={style.icons} src={chat} alt=""/>
        </div>
        <div className={style.safetyBlock}>
          <ServicesBlock />
          <img className={style.icons} src={services} alt=""/>
        </div>
      </div>
      <div className={style.safetyBlock}>
        <ThemeBlock />
      </div>
    </div>
  )
}

export default Settings
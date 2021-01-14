import React from 'react'
import LoginBlockContainer from '../../Sidebar/LoginBlock/LoginBlockContainer'
import style from './Settings.module.css'

const Settings = () => {
  return (
    <div>
      <div>
        <p className={style.title}>Settings</p>
        <LoginBlockContainer />
      </div>
    </div>
  )
}

export default Settings
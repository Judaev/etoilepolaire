import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.main}>
      <div>
        <img src="https://sun9-57.userapi.com/impf/1YklmbSry4pKP-mzpylXkT7a52Bidr95Ukdzag/pCSTI9yZ-co.jpg?size=828x964&quality=96&proxy=1&sign=0811e6fa37270cee1890d872d22879f0" alt="" className={style.profilePhoto}/>
      </div>
      <div className={style.userName}>
        Judaev Denis
      </div>
    </div>
  )
}

export default ProfileInfo
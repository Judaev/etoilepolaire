import React from 'react'
import Counter from './Counter/Counter'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={style.main}>
      <ProfileInfo />
      <Counter />
    </div>
  )
}

export default Profile
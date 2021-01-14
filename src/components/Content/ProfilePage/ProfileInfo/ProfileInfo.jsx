import React from 'react'
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
  return (
    <div className={style.main}>
      <div className={style.background}></div>
      <div className={style.profileInner}>
        <div>
          <img className={style.userPhoto} src={props.profile.photos.large} alt=""/>
        </div>
        <div className={style.userName}>{props.profile.fullName}</div>
      </div>
      <div>{props.profile.aboutMe}</div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div className={style.interests}>Интересы</div>
    </div>
  )
}

export default ProfileInfo

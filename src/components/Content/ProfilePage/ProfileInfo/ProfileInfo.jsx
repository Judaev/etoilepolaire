import React from 'react'
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = (props) => {

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={style.main}>
      <div className={style.background}></div>
      <div className={style.profileInner}>
        <div>
          <img className={style.userPhoto} src={props.profile.photos.large || 'https://sun9-63.userapi.com/impf/c850124/v850124719/12fe02/sT0rGwjNMDA.jpg?size=549x578&quality=96&proxy=1&sign=639326bacd45c5544eacd733aecf8aa6'} alt=""/>
        </div>
        <div className={style.selectedPhoto}>
          { props.isOwner && <input type='file' onChange={onMainPhotoSelected} /> }  
        </div>
        <div className={style.userName}>{props.profile.fullName}</div>
      </div>
      <div>{props.profile.aboutMe}</div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <div className={style.interests}>Интересы</div>
    </div>
  )
}

export default ProfileInfo

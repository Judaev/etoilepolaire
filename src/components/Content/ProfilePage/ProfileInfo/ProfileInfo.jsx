import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.main}>
      <div className={style.background}></div>
      <div className={style.profileInner}>
        <div><img className={style.userPhoto} src="https://sun9-73.userapi.com/impf/QIvWvGGxXgr8weV0kmBztpU_ZB7SpMDsl8M-9w/t1Z5-AgM9OI.jpg?size=640x681&quality=96&proxy=1&sign=2eed07792a534defcd83be186acad850" alt=""/></div>
        <div className={style.userName}>Judaev Denis</div>
      </div>
      <div className={style.interests}>Интересы</div>
    </div>
  )
}

export default ProfileInfo
import React from 'react'
import style from './NotificationItem.module.css'

const NotificationItem = (props) => {
  return (
    <div className={style.notificationItem}>
      <div>
        <img className={style.photo} src="https://sun9-30.userapi.com/gzUKNHS4C0_1AEjY-Rap8eu-R_hBmGNml87z9w/mmyncrIXUcU.jpg" alt=""/>
      </div>
      <div className={style.content}>
        <div className={style.user}>
          <div className={style.userName}>Judaeva Varvara</div>
          <div className={style.stats}>Online</div> 
        </div>
        <div className={style.post}>Like your post</div>
        <div>Data</div>
      </div>
    </div>
  )
}

export default NotificationItem
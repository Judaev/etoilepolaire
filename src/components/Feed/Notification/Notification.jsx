import React from 'react'
import style from './Notification.module.css'
import NotificationItem from './NotificationItem/NotificationItem'

const Notification = (props) => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.notificationTitle}>Notification</div>
        <div className={style.filter}>Filter</div>
      </div>
      <div>
      <NotificationItem />      
      <NotificationItem />        
      <NotificationItem />        
      <NotificationItem />        
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />       
      <NotificationItem />      
      </div>
    </div>
    
  )
}

export default Notification
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './UserDialogItem.module.css'

const UserDialogItem = (props) => {
  return (
    <NavLink className={style.main} to={'/messages/' + props.id}>
      <div>
        <img className={style.userPhoto} src="https://sun9-11.userapi.com/impf/5XzKE66yuHnlue0oCEGi1qJBXYpQkzbiqe22MQ/1hospuUcr7o.jpg?size=750x706&quality=96&proxy=1&sign=95032b8a59ac83b05be7141b7c562d0c" alt=""/>
      </div>
      <div className={style.item}>
        <div className={style.userName}>{props.userName}</div>
        <div>Message</div>
      </div>
    </NavLink>
  )
}

export default UserDialogItem

import React from 'react'
import HeaderUsersDialogs from './HeaderUsersDialogs/HeaderUsersDialogs'
import style from './UsersDialogs.module.css'
import UserDialogItem from './UserDialogItem/UserDialogItem'

const UsersDialogs = (props) => {
  
  let dialogsElements = props.dialogs
    .map( dialog => <UserDialogItem userName={dialog.name} key={dialog.id} id={dialog.id} /> )

    
  return (
    <div className={style.main}>
      <div className={style.header}>
        <HeaderUsersDialogs />
      </div>
      <div className={style.items}>
        { dialogsElements }
      </div>
    </div>
  )
}

export default UsersDialogs
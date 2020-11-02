import React from 'react'
import HeaderUsersDialogs from './HeaderUsersDialogs/HeaderUsersDialogs'
import style from './UsersDialogs.module.css'
import UserDialogItem from './UserDialogItem/UserDialogItem'

let userData = [
  { id: 1, name: 'Varvara' },
  { id: 2, name: 'Denis' },
  { id: 3, name: 'Mops' },
  { id: 4, name: 'Mopsisys' },
  { id: 5, name: 'Mopsya' },
]

let dialogsElements = userData
    .map( dialog => <UserDialogItem userName={dialog.name} id={dialog.id} /> )

const UsersDialogs = (props) => {
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
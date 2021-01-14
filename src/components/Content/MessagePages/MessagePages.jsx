import React from 'react'
import style from './MessagePages.module.css'
import MessagesSpaceContainer from './MessagesSpace/MessagesSpaceContainer'
import UsersDialogsContainer from './UsersDialogs/UsersDialogsContainer'

const MessagePages = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <UsersDialogsContainer />
      </div>
      <div>
        <MessagesSpaceContainer />
      </div>
    </div>
  )
}

export default MessagePages

import React from 'react'
import style from './MessagePages.module.css'
import MessagesSpace from './MessagesSpace/MessagesSpace'
import UsersDialogs from './UsersDialogs/UsersDialogs'

const MessagePages = (props) => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        <UsersDialogs userData={props.state} /> 
      </div>
      <div>
        <MessagesSpace messagesData={props.state}
                       newMessageBody={props.state.newMessageBody}
                       dispatch={props.dispatch} />  
      </div>
    </div>
  )
}

export default MessagePages
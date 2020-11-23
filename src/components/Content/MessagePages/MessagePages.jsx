import React from 'react'
import style from './MessagePages.module.css'
import MessagesSpaceContainer from './MessagesSpace/MessagesSpaceContainer'
import UsersDialogsContainer from './UsersDialogs/UsersDialogsContainer'

const MessagePages = (props) => {
  debugger
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

// messagesData={props.state}
//                        newMessageBody={props.state.newMessageBody}
//                        dispatch={props.dispatch}
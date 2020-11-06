import React from 'react'
import { sendMessageCreater, updateNewMessageTextCreater } from '../../../../redux/messagesReducer'
import Message from './Message/Message'
import style from './MessagesSpace.module.css'

const MessagesSpace = (props) => {

  let addMessage = () => {
    props.dispatch(sendMessageCreater())
  }

  let onMessageChange = (event) => {
    let text = event.target.value
    props.dispatch(updateNewMessageTextCreater(text))
  }
  
  let newMessages = props.messagesData.messages
      .map( message => <Message message={message.message} className={message.className} /> )

  return (
    <div className={style.main}>
      <div>
        { newMessages } 
      </div>
      <div className={style.messagesInput}>
        <textarea className={style.input} onChange={onMessageChange} value={props.newMessageBody} cols="50" rows="2" placeholder='Введите сообщение...'></textarea>
        <button className={style.button} onClick={addMessage}>Отправить</button>
      </div>
    </div>
  )
}

export default MessagesSpace

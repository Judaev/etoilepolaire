import React from 'react'
import Message from './Message/Message'
import style from './MessagesSpace.module.css'

const MessagesSpace = (props) => {

  let addMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = (event) => {
    let text = event.target.value
    props.updateNewMessageText(text)
  }
  
  let newMessages = props.messages
      .map( message => <Message message={message.message} key={message.id} className={message.className} /> )

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

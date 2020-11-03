import React from 'react'
import Message from './Message/Message'
import style from './MessagesSpace.module.css'

const MessagesSpace = (props) => {
  
  let newMessages = props.messagesData.messages
      .map( message => <Message message={message.message} /> )

  return (
    <div className={style.main}>
      <div>
        { newMessages } 
      </div>
      <div className={style.messagesInput}>
        <textarea className={style.input} name="" id="" cols="50" rows="2" placeholder='Введите сообщение...'></textarea>
        <button className={style.button}>Отправить</button>
      </div>
    </div>
  )
}

export default MessagesSpace

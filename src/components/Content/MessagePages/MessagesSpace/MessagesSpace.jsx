import React from 'react'
import Message from './Message/Message'
import style from './MessagesSpace.module.css'

const MessagesSpace = () => {

  let oldMessages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Fine' },
    { id: 4, message: 'Okay' },
    { id: 5, message: 'Goodluck!' },
  ]

  let newMessages = oldMessages
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

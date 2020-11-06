import React from 'react'
import style from './Message.module.css'

const Message = (props) => {
  return (
    <div>
      <div className={`${style}.${props.className}`}>{props.message}</div>
    </div>
  )
}

export default Message
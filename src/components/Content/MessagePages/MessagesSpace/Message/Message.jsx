import React from 'react'
import style from './Message.module.css'

const Message = (props) => {
  // debugger
  return (
    <div>
      <div className={props.className}>{props.message}</div>
    </div>
  )
}

export default Message
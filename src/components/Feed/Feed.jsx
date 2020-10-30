import React from 'react'
import style from './Feed.module.css'
import Friends from './Friends/Friends'
import Notification from './Notification/Notification'

const Feed = () => {
  return (
    <div className={style.feed}>
      Feed
      <Friends />
      <Notification />
    </div>
  )
}

export default Feed
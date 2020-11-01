import React from 'react'
import style from './Feed.module.css'
import Friends from './Friends/Friends'
import Interesting from './Interesting/Interesting'
import Notification from './Notification/Notification'

const Feed = () => {
  return (
    <div className={style.feed}>
        <Interesting />
        <Friends />
        <Notification />
    </div>
  )
}

export default Feed


{/* Music Player */}
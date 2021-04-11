import React from 'react'
import style from './Feed.module.css'
import Friends from './Friends/Friends'
import Interesting from './Interesting/Interesting'
import Notification from './Notification/Notification'
import theme from '../../Theme.module.css'

const Feed = () => {
  return (
    <div className={style.feed}>
      <div className={theme.themes}>
        <Interesting />
        <Friends />
        <Notification />  
      </div>
    </div>
  )
}

export default Feed


{/* Music Player */}
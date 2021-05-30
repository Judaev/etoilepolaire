import React from 'react'
import { SFeedContainer } from './feed.styled'
import Friends from './Friends/Friends'
import Interesting from './Interesting/Interesting'
import Notification from './Notification/Notification'

const Feed = () => {
  return (
    <SFeedContainer>
      {/* <Interesting /> */}
      <Friends />
      {/* <Notification /> */}
    </SFeedContainer>
  )
}

export default Feed
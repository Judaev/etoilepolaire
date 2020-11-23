import React from 'react'
import PostsPageContainer from './PostsPage/PostsPageContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfilePage.module.css'

const ProfilePage = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <PostsPageContainer />
      </div>
    </div>
  )
}

export default ProfilePage
import React from 'react'
import PostsPage from './PostsPage/PostsPage'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfilePage.module.css'

const ProfilePage = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <PostsPage state={props.state} addPost={props.addPost} />
      </div>
    </div>
  )
}

export default ProfilePage
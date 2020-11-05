import React from 'react'
import PostsPage from './PostsPage/PostsPage'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfilePage.module.css'

const ProfilePage = (props) => {
  debugger
  return (
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <PostsPage profilePage={props.profilePage}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost} />
      </div>
    </div>
  )
}

export default ProfilePage
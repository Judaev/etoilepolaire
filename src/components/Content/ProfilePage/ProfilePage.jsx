import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import PostsPageContainer from './PostsPage/PostsPageContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './ProfilePage.module.css'

const ProfilePage = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div>
        <PostsPageContainer />
      </div>
    </div>
  )
}

export default ProfilePage
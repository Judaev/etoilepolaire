import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import PostsPageContainer from './PostsPage/PostsPageContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const ProfilePage = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <PostsPageContainer />
      </div>
    </div>
  )
}

export default ProfilePage
import React from 'react'
import Paginator from '../../Common/Paginator/Paginator'
import style from './FriendsPage.module.css'
import User from './User'

const FriendsPage = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
  return (
    <div>
      <div className={style.title}>Friends</div>
      <Paginator currentPage={currentPage} 
                 onPageChanged={onPageChanged}
                 totalItemsCount={totalUsersCount} 
                 pageSize={pageSize}/>
      <div>
        {users.map((u) => (
          <User key={u.id} 
                user={u} 
                followingInProgress={props.followingInProgress} 
                unfollow={props.unfollow} 
                follow={props.follow} />
        ))}
      </div>
    </div>
  )
}

export default FriendsPage

import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './FriendsPage.module.css'

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
            <span>
              <div>
                <NavLink to={'./profile/' + user.id}>
                  <img
                    className={style.photoUrl}
                    src={
                      user.photos.small != null
                        ? user.photos.small
                        : 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA'
                    }
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      unfollow(user.id)
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    disabled={followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      follow(user.id)
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </span>

            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              {/* <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span> */}
            </span>
            
    </div>
  )
}

export default User

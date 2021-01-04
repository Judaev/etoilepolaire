import * as axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../../api/api'
import style from './FriendsPage.module.css'

const FriendsPage = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={style.title}>Friends</div>
      <button onClick={() => props.getFriends()}>Обновить</button>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={'./profile/' + u.id}>
                  <img
                    className={style.photoUrl}
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA'
                    }
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id)
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id)
                    }}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FriendsPage

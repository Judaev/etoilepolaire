import React from 'react'
import style from './FriendsPage.module.css'

const FriendsPage = (props) => {

  if (props.users.length === 0) {
  props.setUsers(
    [
      { id: 1, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: true, fullName: 'Varvara', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
      { id: 2, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: false, fullName: 'Denis', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
      { id: 3, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: false, fullName: 'Pug', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
    ]
  )}
  
  

  return (
    <div>
      <div className={style.title}>Friends</div>
      <div>
        { props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img className={style.photoUrl} src={u.photoUrl} />
            </div>
            <div>
              {u.followed
                    ? <button onClick={() => {props.unfollow(u.id)} }>Отписаться</button>
                    : <button onClick={() => {props.follow(u.id)} }>Подписаться</button> }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>) }
      </div>
    </div>
  )
}

export default FriendsPage
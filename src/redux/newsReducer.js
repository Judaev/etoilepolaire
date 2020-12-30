const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_NEWS = 'SET_NEWS'

let initialState = {
  news: [
    // { id: 1, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: true, fullName: 'Varvara', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
    // { id: 2, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: false, fullName: 'Denis', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
    // { id: 3, photoUrl: 'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pugs_desktop.jpg?h=475&la=en&w=825&hash=DA4A958DC725B9B4A91C6BFE5EE822EA' , followed: false, fullName: 'Pug', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: true}
        }
        return u
        }) 
      }
    case UNFOLLOW:
      return {...state, users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u
        }) 
      }
    case SET_NEWS: {
      return { ...state, news: [...state.news, ...action.news] }
    }
    default:
      return state
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setNewsAC = (news) => ({ type: SET_NEWS, news })

export default newsReducer
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  users: [
    { id: 1, followed: true, fullName: 'Varvara', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
    { id: 2, followed: false, fullName: 'Denis', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
    { id: 3, followed: false, fullName: 'Pug', status: 'Хорошо там где нас нет', location: {city: 'Moscow', country: 'Russia'} },
  ],
  newPostText: 'Varvara',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer
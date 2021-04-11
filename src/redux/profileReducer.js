import { profileAPI, usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { id: 1, userName: 'Varvara', post: 'Привет, как у тебя дела?' },
    { id: 2, userName: 'Mops', post: 'Привет, как у тебя дела?' },
    { id: 3, userName: 'Mega Mops', post: 'Привет, как у тебя дела?' },
    { id: 4, userName: 'Big Mops', post: 'Привет, как у тебя дела?' },
  ],
  newPostText: 'Varvara',
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostText = action.newPostText
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, userName: 'Кто-то', post: newPostText },
        ],
      }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      }
    }
    default:
      return state
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const addPostActionCreater = (newPostText) => ({
  type: ADD_POST,
  newPostText,
})

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const response = await usersAPI.getProfile(userId)

    dispatch(setUserProfile(response.data))
  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
  }
}

export default profileReducer

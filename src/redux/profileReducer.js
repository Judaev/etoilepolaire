const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, userName: 'Varvara', post: 'Привет, как у тебя дела?' },
    { id: 2, userName: 'Mops', post: 'Привет, как у тебя дела?' },
    { id: 3, userName: 'Mega Mops', post: 'Привет, как у тебя дела?' },
    { id: 4, userName: 'Big Mops', post: 'Привет, как у тебя дела?' },
  ],
  newPostText: 'Varvara',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: 
    return {
      ...state,
      newPostText: action.newText
    }
    case ADD_POST: 
    let newPostText = state.newPostText
    return {
      ...state,
      posts: [...state.posts, {id: 5, userName: 'Кто-то', post: newPostText}]
    }
    default:
      return state
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer
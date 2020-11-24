import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../../redux/profileReducer'
import PostsPage from './PostsPage'

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreater(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreater())
    },

  }
}

const PostsPageContainer = connect(mapStateToProps, mapDispatchToProps)(PostsPage)

export default PostsPageContainer
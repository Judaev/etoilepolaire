import React from 'react'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../../redux/profileReducer'
import PostsItems from './PostsItems/PostsItems'
import PostsPage from './PostsPage'
import style from './PostsPage.module.css'

const PostsPageContainer = (props) => {
  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreater())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreater(text))
  }

  return (
    <PostsPage />
  )
}

export default PostsPageContainer
import React from 'react'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../../redux/profileReducer'
import StoreContext from '../../../../StoreContext'
import PostsPage from './PostsPage'

const PostsPageContainer = (props) => {
  return (
    <StoreContext.Consumer> 
    {
      (store) => {
        let state = store.getState()

        let addPost = () => {
          store.dispatch(addPostActionCreater())
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreater(text)
          store.dispatch(action)
        }
        return (
          <PostsPage updateNewPostText={onPostChange} 
                     addPost={addPost} 
                     profilePage={state.profilePage} 
                     newPostText={state.profilePage.newPostText} />
        )
      }
    }
    </StoreContext.Consumer>
  )
}

export default PostsPageContainer
import React from 'react'
import PostsItems from './PostsItems/PostsItems'
import style from './PostsPage.module.css'

const PostsPage = (props) => {
  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={style.main}>
      <div className={style.createPost}>
        <textarea className={style.textarea} onChange={onPostChange} value={props.newPostText} ref={ newPostElement } cols="100" rows="5" />
        <button className={style.button} onClick={ addPost }>Опубликовать</button>
      </div>
      <div>
        <PostsItems posts={props.profilePage}  />
      </div>
    </div>
  )
}

export default PostsPage
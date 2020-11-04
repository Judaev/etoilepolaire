import React from 'react'
import PostsItems from './PostsItems/PostsItems'
import style from './PostsPage.module.css'

const PostsPage = (props) => {

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value= ''
  }

  return (
    <div className={style.main}>
      <div className={style.createPost}>
        <textarea name="" ref={ newPostElement } cols="100" rows="5"></textarea>
        <button className={style.button} onClick={ addPost }>Опубликовать</button>
      </div>
      <div>
        <PostsItems posts={props.state}  />
      </div>
    </div>
  )
}

export default PostsPage
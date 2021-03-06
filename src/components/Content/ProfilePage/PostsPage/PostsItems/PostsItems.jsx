import React from 'react'
import Post from './Post/Post'
import style from './PostsItems.module.css'

const PostsItems = React.memo((props) => {
  let postElement = props.posts.posts.map((post) => (
    <Post userName={post.userName} key={post.id} post={post.post} />
  ))

  return <div>{postElement}</div>
})
export default PostsItems

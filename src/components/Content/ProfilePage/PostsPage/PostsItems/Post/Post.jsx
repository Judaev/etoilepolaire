import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={style.headerPost}>
        <img src="" alt=""/>
        <div className={style.userName}>{props.userName}</div>
      </div>
      <div>
        {props.post}
      </div>
    </div>
  )
}

export default Post
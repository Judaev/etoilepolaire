import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validators'
import { Textarea } from '../../../Common/FormsControls/FormsControls'
import PostsItems from './PostsItems/PostsItems'
import style from './PostsPage.module.css'

const PostsPage = (props) => {
  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={style.main}>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div>
        <PostsItems posts={props.profilePage}  />
      </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className={style.createPost}>
      <Field validate={[requiredField, maxLength10]} placeholder='Чем хотите поделиться?' name='newPostText' component={Textarea} />
      <button className={style.button}>Опубликовать</button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({
  form: 'newPostText'
}) (AddPostForm)

export default PostsPage
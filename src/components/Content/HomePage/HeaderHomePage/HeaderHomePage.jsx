import React from 'react'
import style from './HeaderHomePage.module.css'
import ModalCreatePost from './ModalCreatePost/ModalCreatePost'

const HeaderHomePage = () => {

  let newPostElement = React.createRef()

  let addNewChange = () => {
    let value = newPostElement.current.value
    return alert(value)
  }

  return (
    <div className={style.main}>
      <div className={style.find}>
        <div>
          <input className={style.input} ref={newPostElement} type="text" placeholder='Введите текст...'/>  
        </div>
        <div>
          <button className={style.button} type='button' onClick={ addNewChange}>Найти</button>
        </div>
      </div>
      <div>
        <button className={style.addPost} type='button'>Add Post</button>
      </div>
      <div className={style.modal}>
        <ModalCreatePost />  
      </div>
      
    </div>
  )
}

export default HeaderHomePage
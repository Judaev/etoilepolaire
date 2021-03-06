import React from 'react'
import { createPortal } from 'react-dom'
import style from './ModalCreatePost.module.css'

const ModalCreatePost = (props) => {
  return (
    <div className={style.main}>

      <div className={style.header}>
        <div className={style.title}>Создать запись</div>
        <button className={style.hide} onClick={props.hideShowModal}>X</button>  
      </div>
      
      <div>
        <div className={style.heading}>
          <input  placeholder='Заголовок' type="text"/>
        </div>
        <div>
          <textarea className={style.text} placeholder='Введите текст...' name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>

    </div>
  )
}

export default ModalCreatePost
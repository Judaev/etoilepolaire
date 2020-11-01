import React from 'react'
import style from './HeaderHomePage.module.css'

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
          <input className={style.input} ref={newPostElement} type="text" placeholder='Введите текс'/>  
        </div>
        <div>
          <button className={style.button} type='button' onClick={ addNewChange}>Find</button>
        </div>
      </div>
      <div>
        <button className={style.addPost} type='button'>Add Post</button>
      </div>
    </div>
  )
}

export default HeaderHomePage
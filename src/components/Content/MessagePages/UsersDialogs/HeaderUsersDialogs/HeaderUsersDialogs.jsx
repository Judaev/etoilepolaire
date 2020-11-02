import React from 'react'
import style from './HeaderUsersDialogs.module.css'

const HeaderUsersDialogs = () => {
  return (
    <div className={style.main}>
      <div className={style.finder}>
        <div>
          <input type="text" placeholder='Поиск'/>
        </div>
        <div>
          <button>Найти</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderUsersDialogs

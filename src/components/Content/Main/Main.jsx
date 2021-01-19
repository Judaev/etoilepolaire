import React from 'react'
import style from './Main.module.css'

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.item}>
        На данный момент реализовано:
        <ul>
          <li>
            Еще разрабатывается
          </li>
        </ul>
      </div>
      <div className={style.item}>
        <p>Добро Пожаловать </p>
        <p>
          Это проект - 
          социальная сеть.
        </p>
        <p>
          Идея и разработка собственная
        </p>
        <p>
          Judaev Denis
        </p>  
      </div>
      <div className={style.item}>
        Стек технологий - 
        <ul>
          <li>
            React,
          </li>
          <li>
            Redux,
          </li>
          <li>
            React-Router,
          </li>
          <li>
            React-Redux,
          </li>
          <li>
            React Funk,
          </li>
          <li>
            Axios,
          </li>
          <li>
            Module CSS,
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Main
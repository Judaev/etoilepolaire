import React from 'react'
import style from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.title}>Login</div>
        <form>
          <div>
            <input placeholder='Логин' />
          </div>
          <div>
            <input placeholder='Пароль' />
          </div>
          <div>
            <input type='checkbox' /> запомнить меня
          </div>
          <div>
            <button>Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

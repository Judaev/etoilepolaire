import React from 'react'
import { Route } from 'react-router-dom'
import style from './Content.module.css'
import HomePage from './HomePage/HomePage'
import MessagePage from './MessagePages/MessagePages'
import MusicPage from './MusicPage/MusicPage'


const Content = () => {
  return (
    <div className={style.content}>
      <Route path='/home' render={ () => <HomePage />} />
      <Route path='/messages' render={ () => <MessagePage />} />
      <Route path='/music' render={ () => <MusicPage />} />
    </div>
  )
}

export default Content
import React from 'react'
import { Route } from 'react-router-dom'
import style from './Content.module.css'
import HomePage from './HomePage/HomePage'
import MessagePage from './MessagePages/MessagePages'
import MusicPage from './MusicPage/MusicPage'
import Services from './Services/Services'


const Content = () => {
  return (
    <div className={style.content}>
      <Route path='/home' render={ () => <HomePage />} />
      <Route path='/messages' render={ () => <MessagePage />} />
      <Route path='/music' render={ () => <MusicPage />} />
      <Route path='/services' render={ () => <Services />} />
    </div>
  )
}

export default Content
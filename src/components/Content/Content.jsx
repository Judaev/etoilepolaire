import React from 'react'
import { Route } from 'react-router-dom'
import style from './Content.module.css'
import HomePage from './HomePage/HomePage'
import Main from './Main/Main'
import MessagePage from './MessagePages/MessagePages'
import MusicPage from './MusicPage/MusicPage'
import Services from './Services/Services'


const Content = (props) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Route path='/etoilepolaire' render={ () => <Main />} />
        <Route path='/home' render={ () => <HomePage />} />
        <Route path='/messages' render={ () => <MessagePage state={ props.state.messagesPage } />} />
        <Route path='/music' render={ () => <MusicPage />} />
        <Route path='/services' render={ () => <Services />} />
      </div>
    </div>
  )
}

export default Content
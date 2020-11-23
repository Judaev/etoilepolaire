import React from 'react'
import { Route } from 'react-router-dom'
import style from './Content.module.css'
import HomePage from './HomePage/HomePage'
import Main from './Main/Main'
import MessagePage from './MessagePages/MessagePages'
import MusicPage from './MusicPage/MusicPage'
import ProfilePage from './ProfilePage/ProfilePage'
import Services from './Services/Services'
import Settings from './Settings/Settings'


const Content = (props) => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <Route path='/etoilepolaire' render={ () => <Main />} />
        <Route path='/home' render={ () => <HomePage />} />
        <Route path='/profile' render={ () => <ProfilePage /> } />
        <Route path='/messages' render={ () => <MessagePage />} />
        <Route path='/music' render={ () => <MusicPage />} />
        <Route path='/services' render={ () => <Services />} />
        <Route path='/settings' render={ () => <Settings />} />
      </div>
    </div>
  )
}

export default Content

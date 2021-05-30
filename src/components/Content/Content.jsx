import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import style from './Content.module.css'
import FriendsPageContainer from './FriendsPage/FriendsPageContainer'
import HomePage from './HomePage/HomePage'
import Main from './Main/Main'
// import MessagePage from './MessagePages/MessagePages'
// import MusicPage from './MusicPage/MusicPage'
import ProfilePageContainer from './ProfilePage/ProfilePageContainer'
import Services from './Services/Services'
import Settings from './Settings/Settings'
import LoginPage from './LoginPage/LoginPage'
import withSuspence from '../../hoc/withSuspence'


const MessagePage = React.lazy(() => import('./MessagePages/MessagePages'))
const MusicPage = React.lazy(() => import('./MusicPage/MusicPage'))

const Content = () => {
  return (
    <div className={style.content}>
        <div className={style.container}>
          <Route path="/etoilepolaire" render={() => <Main />} />
          <Route path="/home" render={() => <HomePage />} />
          <Route
            path="/profile/:userId?"
            render={() => <ProfilePageContainer />}
          />
          <Route path="/messages" render={withSuspence(MessagePage)} />
          <Route path="/music" render={withSuspence(MusicPage)} />
          <Route path="/services" render={() => <Services />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <FriendsPageContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
     
    </div>
  )
}

export default Content

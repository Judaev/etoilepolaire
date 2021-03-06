import React from 'react'
import './App.css'
import SidebarContainer from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import Feed from './components/Feed/Feed'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import { BrowserRouter, HashRouter, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Preloader from './components/Common/Preloader/Preloader'
import store from './redux/reduxStore'
import { Provider } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="appWrapper">
        <SidebarContainer />
        <Content />
        <Feed />
      </div>
    )
  }
}

const mapStateToPtops = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToPtops, { initializeApp })
)(App)

const EtoileApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default EtoileApp

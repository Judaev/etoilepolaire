import React from 'react'
import Favorites from './Favorites/Favorites'
import HeaderNavbar from './HeaderNavbar/HeaderNavbar'
import LoginBlockContainer from './LoginBlock/LoginBlockContainer'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import style from './Sidebar.module.css'

class SidebarContainer extends React.Component {
  state = {
    sidebar: true
  }

  hideSidebar = () => {
    this.setState({
      sidebar: false
    })
  }

  render() {
    return (
      <>
        { this.state.sidebar && <Sidebar hideSidebar={this.hideSidebar} /> } 
      </>
      
    )
  }
}

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <HeaderNavbar hideSidebar={props.hideSidebar} />
      <Profile />
      <Navbar />
      <Favorites />
      <Favorites />
      <Favorites />
    </div>
  )
}

export default SidebarContainer
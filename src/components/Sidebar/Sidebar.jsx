import React from 'react'
import SidebarProfile from '../../Common/components/sidebarProfile/sidebarProfile.component'
import Favorites from './Favorites/Favorites'
import Navbar from './Navbar/Navbar'
import { SSidebarContainer } from './Sidebar.styled'

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
    <SSidebarContainer>
        <SidebarProfile />
        <Navbar />
        <Favorites />  
    </SSidebarContainer>
  )
}

export default SidebarContainer
import React from 'react'
import SidebarProfile from '../../Common/components/sidebarProfile/sidebarProfile.component'
import { Spacer } from '../../Common/components/spacer/spacer.component'
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
        <Spacer value='120px' />
    </SSidebarContainer>
  )
}

export default SidebarContainer
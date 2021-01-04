import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProfilePage from './ProfilePage'
import { getUserProfile } from '../../../redux/profileReducer'

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 13660
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfilePageContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

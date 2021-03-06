import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../redux/authReducer'

import LoginBlock from './LoginBlock'

class LoginBlockContainer extends React.Component {

  render() {
    return <LoginBlock {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { logout })(
  LoginBlockContainer
)

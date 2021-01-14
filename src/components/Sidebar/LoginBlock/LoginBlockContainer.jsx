import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { getAuthUserData } from '../../../redux/authReducer'

import LoginBlock from './LoginBlock'

class LoginBlockContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return <LoginBlock {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { getAuthUserData })(
  LoginBlockContainer
)

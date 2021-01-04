import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { authAPI } from '../../../api/api'
import { setAuthUserData } from '../../../redux/authReducer'

import LoginBlock from './LoginBlock'

class LoginBlockContainer extends React.Component {
  componentDidMount() {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
  }

  render() {
    return <LoginBlock {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})
export default connect(mapStateToProps, { setAuthUserData })(
  LoginBlockContainer
)

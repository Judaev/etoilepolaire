import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../../../../hoc/withAuthRedirect'
import UsersDialogs from './UsersDialogs'

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    dialogss: {}
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(UsersDialogs)
import React from 'react'
import { connect } from 'react-redux'
import HeaderUsersDialogs from './HeaderUsersDialogs/HeaderUsersDialogs'
import UserDialogItem from './UserDialogItem/UserDialogItem'
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

const UsersDialogsContainer = connect(mapStateToProps, mapDispatchToProps) (UsersDialogs)

export default UsersDialogsContainer
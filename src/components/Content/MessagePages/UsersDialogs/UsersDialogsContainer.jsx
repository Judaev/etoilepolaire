import React from 'react'
import StoreContext from '../../../../StoreContext'
import HeaderUsersDialogs from './HeaderUsersDialogs/HeaderUsersDialogs'
import UserDialogItem from './UserDialogItem/UserDialogItem'
import UsersDialogs from './UsersDialogs'

const UsersDialogsContainer = (props) => {

  // let state = props.store.getState()
  
  // let dialogsElements = props.userData.dialogs
  //   .map( dialog => <UserDialogItem userName={dialog.name} id={dialog.id} /> )

    
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()
          return (
            <UsersDialogs dialogs={state.messagesPage.dialogs} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default UsersDialogsContainer
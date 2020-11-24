import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreater, updateNewMessageTextCreater } from '../../../../redux/messagesReducer'
import MessagesSpace from './MessagesSpace'

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreater(text))
    },
    sendMessage: () => {
      dispatch(sendMessageCreater())
    },

  }
}

const MessagesSpaceContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesSpace)

export default MessagesSpaceContainer

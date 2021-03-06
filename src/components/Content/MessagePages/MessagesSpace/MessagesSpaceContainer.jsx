import { connect } from 'react-redux'
import { sendMessageCreater } from '../../../../redux/messagesReducer'
import MessagesSpace from './MessagesSpace'

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    newMessageBody: state.messagesPage.newMessageBody
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreater(newMessageBody))
    },

  }
}

const MessagesSpaceContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesSpace)

export default MessagesSpaceContainer

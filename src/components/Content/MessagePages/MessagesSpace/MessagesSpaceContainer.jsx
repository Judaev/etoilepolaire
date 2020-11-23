import React from 'react'
import { sendMessageCreater, updateNewMessageTextCreater } from '../../../../redux/messagesReducer'
import StoreContext from '../../../../StoreContext'
import MessagesSpace from './MessagesSpace'

const MessagesSpaceContainer = (props) => {

  // let state = props.store.getState()

  // let addMessage = () => {
  //   props.store.dispatch(sendMessageCreater())
  // }

  // let onMessageChange = (text) => {
  //   props.store.dispatch(updateNewMessageTextCreater(text))
  // }

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()

          let addMessage = () => {
            store.dispatch(sendMessageCreater())
          }
        
          let onMessageChange = (text) => {
            store.dispatch(updateNewMessageTextCreater(text))
          }

          return (
            <MessagesSpace updateNewMessageText={onMessageChange} 
                           sendMessage={addMessage} 
                           messages={state.messagesPage.messages} 
                           newMessageBody={state.messagesPage.newMessageBody}  />
          )
          
        }
      }
    </StoreContext.Consumer>
  )
}

export default MessagesSpaceContainer

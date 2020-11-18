const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'Varvara' },
    { id: 2, name: 'Denis' },
    { id: 3, name: 'Mops' },
    { id: 4, name: 'Mopsisys' },
    { id: 5, name: 'Mopsya' },
  ],
  messages: [
    { id: 1, message: 'Hello', className: 'style.myMessages' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Fine' },
    { id: 4, message: 'Okay' },
    { id: 5, message: 'Goodluck!' },
  ],
  newMessageBody: '',
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageBody = action.newText
      return state
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageBody,
        className: 'myMessages'
      }
      state.messages.push(newMessage)
      state.newMessageBody = ''
      return state
    default:
      return state
  }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextCreater = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer
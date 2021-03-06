const SEND_MESSAGE = 'SEND-MESSAGE'

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
  ]
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: newMessage}]
      }
    }
    default:
      return state
  }
}

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default messagesReducer
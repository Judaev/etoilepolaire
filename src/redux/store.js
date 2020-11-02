let store = {
  state: {
    MessagePages: {
      dialogs: [
        { id: 1, name: 'Varvara' },
        { id: 2, name: 'Denis' },
        { id: 3, name: 'Mops' },
        { id: 4, name: 'Mopsisys' },
        { id: 5, name: 'Mopsya' },
      ],
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Fine' },
        { id: 4, message: 'Okay' },
        { id: 5, message: 'Goodluck!' },
      ],
      newMessageBody: '',
    },
  },
}

export default store

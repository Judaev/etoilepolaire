let store = {
  _state: {
    messagesPage: {
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
    profilePage: {
      posts: [
        { id: 1, userName: 'Varvara', post: 'Привет, как у тебя дела?' },
        { id: 2, userName: 'Mops', post: 'Привет, как у тебя дела?' },
        { id: 3, userName: 'Mega Mops', post: 'Привет, как у тебя дела?' },
        { id: 4, userName: 'Big Mops', post: 'Привет, как у тебя дела?' },
      ],
      newPostText: 'Varvara',
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      userName: 'Кто то',
      post: this._state.profilePage.newPostText,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.messagesPage.newMessageBody,
    }
    this._state.messagesPage.messages.push(newMessage)
    this._state.messagesPage.newMessageBody = ''
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newText) {
    this._state.messagesPage.newMessageBody = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
}

window.store = store.state

export default store

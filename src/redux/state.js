import rerenderEntireTree from '../render'

let state = {
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
      { id: 1, userName: 'Varvara', post:'Привет, как у тебя дела?'},
      { id: 2, userName: 'Mops', post:'Привет, как у тебя дела?'},
      { id: 3, userName: 'Mega Mops', post:'Привет, как у тебя дела?'},
      { id: 4, userName: 'Big Mops', post:'Привет, как у тебя дела?'},
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    userName: 'Кто то',
    post: postMessage
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state

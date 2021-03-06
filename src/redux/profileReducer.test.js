import profileReducer, { addPostActionCreater, deletePost } from './profileReducer'

let state = {
  posts: [
    { id: 1, userName: 'Varvara', post: 'Привет, как у тебя дела?' },
    { id: 2, userName: 'Mops', post: 'Привет, как у тебя дела?' },
    { id: 3, userName: 'Mega Mops', post: 'Привет, как у тебя дела?' },
    { id: 4, userName: 'Big Mops', post: 'Привет, как у тебя дела?' },
  ],
}

test('message', () => {
  // 1. test data
  let action = addPostActionCreater('Полярная звезда')

  // 2. action
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
})

test('new post should be added', () => {
  // 1. test data
  let action = addPostActionCreater('Полярная звезда')

  // 2. action
  let newState = profileReducer(state, action)

  expect(newState.posts[4].post).toBe('Полярная звезда')
})

test('delete', () => {
  // 1. test data
  let action = deletePost(1)

  // 2. action
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})

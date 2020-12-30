import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import newsReducer from './newsReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendPage: friendsReducer,
  newsPage: newsReducer
})

let store = createStore(reducers)

window.store = store

export default store

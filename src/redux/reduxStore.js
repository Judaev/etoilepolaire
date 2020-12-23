import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendPage: friendsReducer
})

let store = createStore(reducers)

window.store = store

export default store

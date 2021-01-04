import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import newsReducer from './newsReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  newsPage: newsReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store

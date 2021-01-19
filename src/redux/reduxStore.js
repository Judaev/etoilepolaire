import { createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import friendsReducer from './friendsReducer'
import newsReducer from './newsReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  newsPage: newsReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store

import { combineReducers } from 'redux'
import postsReducer from './postReducer'
import userReducer from './usersReducer'

/*
Rules of Reducers

Must return any value besides 'undefined'
Produces state or data to be usesd inside of your app using 
only previous state and the action

Must not return reach out of itself to decide
what value to return

Must not mutate its input state argument
*/
export default combineReducers({
  posts: postsReducer,
  users: userReducer,
})

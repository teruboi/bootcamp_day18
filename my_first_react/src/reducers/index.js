// importing modules and all reducers
import { combineReducers } from 'redux'
import postsReducer from "./postsReducer";
import usersReducer from './usersReducer';

// exporting the combined reducers
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})
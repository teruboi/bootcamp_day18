// importing npm modules for configuring store and the reducer
import { configureStore } from '@reduxjs/toolkit'
import formReducer from './reducer'
import thunk from'redux-thunk'

// import modules for debugging purposes
import { composeWithDevTools } from '@redux-devtools/extension'

// defining store
export default configureStore({
    reducer: {
        form: formReducer
    },
    middleware: [thunk],
    window: window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools
})
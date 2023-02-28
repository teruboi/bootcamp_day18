import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { composeWithDevTools } from '@redux-devtools/extension'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
    window: window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools
})
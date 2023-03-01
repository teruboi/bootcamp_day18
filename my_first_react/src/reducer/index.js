// defining the reducers with function to
// save form data to store
const reducer = (state = [], action) => {
    switch (action.type) {
        case "SUBMIT_FORM":
            return action.payload
        default:
            return state
    }
}

export default reducer
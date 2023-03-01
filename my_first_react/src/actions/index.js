// action that can be called to submit the form
// data to the store
export const submitForm = (values) => async (dispatch, getState) => {
    const data = values
    dispatch({
        type: "SUBMIT_FORM",
        payload: data
    })
    console.log(getState().form);
}
export const sharedActionTypes = {
    setLoading: 'LOADING_SET'
};

export const setLoading = (loading = false) => (dispatch) => {
    return dispatch({
        type: sharedActionTypes.setLoading,
        payload: { loading }
    })
}

/**
 * @name sharedActionTypes
 * @desc All action types related to shared actions 
 */
export const sharedActionTypes = {
    setLoading: 'LOADING_SET'
};

/**
 * @name setLoading
 * @desc Dispatch sharedActionTypes.setLoading with given loading value
 * @property {Boolean} loading [loading="false"]
 */
export const setLoading = (loading = false) => (dispatch) => {
    return dispatch({
        type: sharedActionTypes.setLoading,
        payload: { loading }
    })
}

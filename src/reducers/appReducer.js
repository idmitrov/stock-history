import { sharedActionTypes } from '../actions/sharedActions';

const appDefaults = {
    loading: false
};

export const appReducer = (state = appDefaults, action) => {
    switch(action.type) {
        case sharedActionTypes.setLoading: {
            return {
                ...state,
                loading: action.payload.loading
            }
        }
        default: return state;
    }
}

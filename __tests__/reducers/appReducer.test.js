import { appReducer, appDefaults } from '../../src/reducers/appReducer';
import { sharedActionTypes } from '../../src/actions/sharedActions';

describe('App reducer', () => {
    it('Change loading should set loading state', () => {
        const newLoadingValue = true;
        const action = {
            type: sharedActionTypes.setLoading,
            payload: { loading: newLoadingValue }
        };

        const receivedState = appReducer(appDefaults, action);
        const expectedState = {
            ...appDefaults,
            loading: newLoadingValue
        };

        expect(receivedState, expectedState)
    });
});
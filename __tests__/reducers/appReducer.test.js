import { appReducer, appDefaults } from '../../src/reducers/appReducer';
import { sharedActionTypes } from '../../src/actions/sharedActions';

describe('App reducer', () => {
    it('Change loading should set loading state', () => {
        const action = {
            type: sharedActionTypes.setLoading,
            payload: { loading: true }
        };

        const receivedState = appReducer(appDefaults, action);
        const expectedState = {
            ...appDefaults,
            loading: true
        };

        expect(receivedState, expectedState)
    });
});
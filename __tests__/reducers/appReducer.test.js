import { appReducer, appDefaults } from '../../src/reducers/appReducer';
import { sharedActionTypes } from '../../src/actions/sharedActions';

describe('App reducer', () => {
    it('Pass loading equal to true should set loading state to true', () => {
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
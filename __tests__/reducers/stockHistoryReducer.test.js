import { stockHistoryReducer, stockHistoryDefaults } from '../../src/reducers/stockHistoryReducer';
import { stockHistoryActionTypes } from '../../src/actions/sotckHistoryActions';

describe('stockHistory reducer', () => {
    it('Pass unknown action should return default state', () => {
        const unknownAction = { type: 'unknown' };
        const receivedState = stockHistoryReducer(stockHistoryDefaults, unknownAction);
        
        expect(receivedState).toEqual(stockHistoryDefaults);
    });

    it('Change stock mode should set stock mode state', () => {
        const action = {
            type: stockHistoryActionTypes.setStockHistoryMode,
            payload: { mode: 'weekly' }
        };

        const receivedState = stockHistoryReducer(stockHistoryDefaults, action);
        const expectedState = {
            ...stockHistoryDefaults,
            mode: 'weekly'
        };

        expect(receivedState).toEqual(expectedState)
    });
});
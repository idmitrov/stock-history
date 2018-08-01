import { stockHistoryReducer, stockHistoryDefaults } from '../../src/reducers/stockHistoryReducer';

describe('stockHistory reducer', () => {
    it('Pass unknown action should return default state', () => {
        const unknownAction = { type: 'unknown' };
        const receivedState = stockHistoryReducer(stockHistoryDefaults, unknownAction);
        
        expect(receivedState).toEqual(stockHistoryDefaults);
    });
});
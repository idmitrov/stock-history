import { stockHistoryReducer, stockHistoryDefaults } from '../../src/reducers/stockHistoryReducer';

describe('stockHistory reducer', () => {
    it('has a default state', () => {
        let expectedState = stockHistoryReducer(undefined, { type: 'unknown' });
        
        expect(expectedState).toEqual(stockHistoryDefaults);
    });
});
import { stockHistoryReducer, stockHistoryDefaults } from '../../src/reducers/stockHistoryReducer';
import { stockHistoryActionTypes } from '../../src/actions/sotckHistoryActions';

describe('stockHistory reducer', () => {
    it('Pass unknown action should return default state', () => {
        const unknownAction = { type: 'unknown' };
        const receivedState = stockHistoryReducer(stockHistoryDefaults, unknownAction);
        
        expect(receivedState).toEqual(stockHistoryDefaults);
    });

    it('Change stock mode should set stock mode state', () => {
        const newModeValue = 'weekly';
        const action = {
            type: stockHistoryActionTypes.setStockHistoryMode,
            payload: { mode: newModeValue }
        };

        const receivedState = stockHistoryReducer(stockHistoryDefaults, action);
        const expectedState = {
            ...stockHistoryDefaults,
            mode: newModeValue
        };

        expect(receivedState).toEqual(expectedState)
    });
    
    it('Change stock symbol should set stock symbol state', () => {
        const newSymbolValue = 'FB';
        const action = {
            type: stockHistoryActionTypes.setStockHistorySymbol,
            payload: { symbol: newSymbolValue }
        };

        const receivedState = stockHistoryReducer(stockHistoryDefaults, action);
        const expectedState = {
            ...stockHistoryDefaults,
            symbol: newSymbolValue
        };

        expect(receivedState).toEqual(expectedState)
    });

    it('Change stock output type should set stock outputType state', () => {
        const newOutputTypeValue = 'full';
        const action = {
            type: stockHistoryActionTypes.setStockHistoryOutputType,
            payload: { outputType: newOutputTypeValue }
        };

        const receivedState = stockHistoryReducer(stockHistoryDefaults, action);
        const expectedState = {
            ...stockHistoryDefaults,
            outputType: newOutputTypeValue
        }

        expect(receivedState).toEqual(expectedState);
    });
});
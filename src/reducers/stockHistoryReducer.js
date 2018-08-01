import { stockHistoryActionTypes } from "../actions/sotckHistoryActions";

export const stockHistoryDefaults = {
    data: null,
    mode: 'monthly',
    symbol: 'GOOG',
    outputType: 'compact'
};

export const stockHistoryReducer = (state = stockHistoryDefaults, action) => {
    switch(action.type) {
        case stockHistoryActionTypes.setStockHistoryMode: {
            return {
                ...state,
                mode: action.payload.mode
            }
        }
        case stockHistoryActionTypes.setStockHistorySymbol: {
            return {
                ...state,
                symbol: action.payload.symbol
            }
        }
        case stockHistoryActionTypes.setStockHistoryData: {
            let timeSeries = Object.entries(action.payload)[1][1];

            let timeSeriesArray = Object.entries(timeSeries)
                .map(entry => {
                    let oldObject = entry[1];
                    let newObj = { date: entry[0] };

                    Object.keys(oldObject)
                        .forEach(key => {
                            let keyBeautified = key.replace(/[.\s\d]+/, '');
                            let oldObjValue = oldObject[key];

                            newObj[keyBeautified] = oldObjValue;
                        });

                    let ohlc = parseFloat(newObj.open) + parseFloat(newObj.high) + parseFloat(newObj.low) + parseFloat(newObj.close)
                    newObj.ohlc = ohlc / 4;

                    return newObj;
                })
                .reverse();

            return {
                ...state,
                data: timeSeriesArray
            }
        }
        case stockHistoryActionTypes.setStockHistoryOutputType: {
            return {
                ...state,
                outputType: action.payload.outputType
            }
        }
        default: return state;
    }
}

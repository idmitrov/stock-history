/**
 * @name stockHistoryActionTypes
 * @desc All action types related to stockHistory actions 
 */
export const stockHistoryActionTypes = {
    fetchStockHistory: 'STOCK_HISTORY_FETCH',
    setStockHistoryData: 'STOCK_HISTORY_DATA_SET',
    setStockHistoryMode: 'STOCK_HISTORY_MODE_SET',
    setStockHistorySymbol: 'STOCK_HISTORY_SYMBOL_SET',
    setStockHistoryOutputType: 'STOCK_HISTORY_OUTPUT_TYPE_SET'
};

/**
 * @name fetchStockHistory
 * @desc Dispatch stockHistoryActionTypes.fetchStockHistory
 */
export const fetchStockHistory = () => (dispatch, getState) => {
    let { mode, outputType, symbol } = getState().history;

    return dispatch({
        type: stockHistoryActionTypes.fetchStockHistory,
        payload: { mode, outputType, symbol },
        success: stockHistoryActionTypes.setStockHistoryData,
        meta: { api: 'stock' }
    });
}

/**
 * @name setStockHistoryMode
 * @desc Dispatch stockHistoryActionTypes.setStockHistoryMode with given mode value
 * @param {String} mode 
 */
export const setStockHistoryMode = (mode) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistoryMode,
        payload: { mode }
    });
}

/**
 * @name setStockHistorySymbol
 * @desc Dispatch stockHistoryActionTypes.setStockHistorySymbol with given symbol value
 * @param {String} symbol 
 */
export const setStockHistorySymbol = (symbol) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistorySymbol,
        payload: { symbol }
    });
}

/**
 * @name setStockHistoryOutputType
 * @desc Dispatch stockHistoryActionTypes.setStockHistoryOutputType with given outputType value
 * @param {String} outputType 
 */
export const setStockHistoryOutputType = (outputType) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistoryOutputType,
        payload: { outputType }
    });
}

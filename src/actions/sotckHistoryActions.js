export const stockHistoryActionTypes = {
    fetchStockHistory: 'STOCK_HISTORY_FETCH',
    setStockHistoryData: 'STOCK_HISTORY_DATA_SET',
    setStockHistoryMode: 'STOCK_HISTORY_MODE_SET',
    setStockHistorySymbol: 'STOCK_HISTORY_SYMBOL_SET',
    setStockHistoryOutputType: 'STOCK_HISTORY_OUTPUT_TYPE_SET'
};

export const fetchStockHistory = () => (dispatch, getState) => {
    let { mode, outputType, symbol } = getState().history;

    return dispatch({
        type: stockHistoryActionTypes.fetchStockHistory,
        payload: { mode, outputType, symbol },
        success: stockHistoryActionTypes.setStockHistoryData,
        meta: { api: 'stock' }
    });
}

export const setStockHistoryMode = (mode) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistoryMode,
        payload: { mode }
    });
}

export const setStockHistorySymbol = (symbol) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistorySymbol,
        payload: { symbol }
    });
}

export const setStockHistoryOutputType = (type) => (dispatch) => {
    return dispatch({
        type: stockHistoryActionTypes.setStockHistoryOutputType,
        payload: { type }
    });
}

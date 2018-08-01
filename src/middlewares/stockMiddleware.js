import fetch from 'isomorphic-fetch';
import { apiConfig } from '../shared/config';
import * as sharedActions from '../actions/sharedActions';

const FUNCTION_MAP = {
    daily: 'TIME_SERIES_DAILY',
    weekly: 'TIME_SERIES_WEEKLY',
    monthly: 'TIME_SERIES_MONTHLY'
}

const stockMiddleware = (store) => (next) => (action) => {
    if (action.meta && action.meta.api && action.meta.api === 'stock') {
        store.dispatch(sharedActions.setLoading(true));

        return new Promise((resolve, reject) => {
            let functionMode = FUNCTION_MAP[action.payload.mode];
            let query = `query?function=${functionMode}&symbol=${action.payload.symbol}&outputsize=${action.payload.outputType}`;
            let url = `${apiConfig.stock.url}/${query}&apikey=${apiConfig.stock.key}`;

            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw response;
                    }

                    return response.json();
                })
                .then((data) => {
                    if (data.hasOwnProperty('Error Message') || data.hasOwnProperty('Information')) {
                        throw data;
                    }

                    resolve(store.dispatch({
                        type: action.success,
                        payload: data
                    }));
                })
                .catch((error) => {
                    reject(error);
                })
                .finally(() => store.dispatch(sharedActions.setLoading(false)));
        });
    }

    return next(action);
}

export default stockMiddleware;

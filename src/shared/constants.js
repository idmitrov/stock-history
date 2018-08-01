export const availableStockSymbols = [
    { name: 'Google', value: 'GOOG' },
    { name: 'Microsoft', value: 'MSFT' },
    { name: 'Facebook', value: 'FB' }
]

export const availableStockModes = [
    { name: 'Daily', value: 'daily' },
    { name: 'Weekly', value: 'weekly' },
    { name: 'Monthly', value: 'monthly' }
];

export const availableStockOutputTypes = {
    full: 'full',
    compact: 'compact'
}

export const ohlcLineChartDefaults = {
    label: 'OHLC Average',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: []
};
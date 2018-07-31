import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as stockHistoryActions from '../actions/sotckHistoryActions';

import LineChart from '../components/chart/LineChart';
// import CandleStickChart from '../components/chart/CandleStickChart';

const dataSetOptions = {
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
    pointHitRadius: 10
};

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStockHistory();
    }

    render() {
        return(
            <section>
                <h2>Dashboard</h2>

                <select disabled={this.props.loading} value={this.props.stockHistorySymbol} onChange={this.props.changeStockHistorySymbol}>
                    <option value="GOOG">Google</option>
                    <option value="MSFT">Microsoft</option>
                    <option value="FB">Facebook</option>
                </select>

                <select disabled={this.props.loading} value={this.props.stockHistoryMode} onChange={this.props.changeStockHistoryMode}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>

                <button disabled={this.props.loading} onClick={this.props.fetchStockHistory}>Apply</button>

                {
                    this.props.loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <LineChart data={this.props.stockHistoryData}></LineChart>
                        </div>
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.app.loading,
        stockHistoryMode: state.history.mode,
        stockHistorySymbol: state.history.symbol,
        stockHistoryData: () => {
            if (!state.history.data) {
                return {};
            }

            const data = {
                labels: state.history.data.map(data => data.date),
                datasets: [
                    {
                        ...dataSetOptions,
                        data: state.history.data.map(data => data.ohlc)
                    }
                ]
            }

            return data;
        }
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStockHistory: () => {
            return dispatch(stockHistoryActions.fetchStockHistory());
        },
        changeStockHistoryMode: (e) => {
            return dispatch(stockHistoryActions.setStockHistoryMode(e.target.value));
        },
        changeStockHistorySymbol: (e) => {
            return dispatch(stockHistoryActions.setStockHistorySymbol(e.target.value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

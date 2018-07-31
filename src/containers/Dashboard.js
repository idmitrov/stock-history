import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as stockHistoryActions from '../actions/sotckHistoryActions';

import {
    Button,
    CircularProgress,
    MenuItem,
    Select
} from '@material-ui/core'

import { Row, Col } from 'reactstrap';

import LineChart from '../components/chart/LineChart';

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

                <Row className="justify-content-center">
                    <Col md="auto">
                        <Select
                            value={this.props.stockHistorySymbol}
                            disabled={this.props.loading}
                            onChange={this.props.changeStockHistorySymbol}>
                            <MenuItem value="GOOG">Google</MenuItem>
                            <MenuItem value="MSFT">Microsoft</MenuItem>
                            <MenuItem value="FB">Facebook</MenuItem>
                        </Select>
                    </Col>

                    <Col md="auto">
                        <Select
                            value={this.props.stockHistoryMode}
                            disabled={this.props.loading}
                            onChange={this.props.changeStockHistoryMode}>
                            <MenuItem value="daily">Daily</MenuItem>
                            <MenuItem value="weekly">Weekly</MenuItem>
                            <MenuItem value="monthly">Monthly</MenuItem>
                        </Select>
                    </Col>

                    <Col md="auto">
                        <Button color="primary" variant="contained" disabled={this.props.loading} onClick={this.props.fetchStockHistory}>Apply</Button>
                    </Col>

                    <Col md="12">
                        {
                            this.props.loading ? (
                                <CircularProgress />
                            ) : (
                                <LineChart data={this.props.stockHistoryData}></LineChart>
                            )
                        }
                    </Col>
                </Row>
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

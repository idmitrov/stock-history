import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as stockHistoryActions from '../actions/sotckHistoryActions';

import {
    Button,
    CircularProgress,
    MenuItem,
    Select,
    Switch,
    Typography
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

const availableSymbols = [
    { name: 'Google', value: 'GOOG' },
    { name: 'Microsoft', value: 'MSFT' },
    { name: 'FB', value: 'Facebook' }
]

const availableModes = [
    { name: 'Daily', value: 'daily' },
    { name: 'Weekly', value: 'weekly' },
    { name: 'Monthly', value: 'monthly' }
];

const availableOutputTypes = [
    { name: 'Full', value: 'full' },
    { name: 'Compact', value: 'compact' }
];

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchStockHistory();
    }

    render() {
        return(
            <section>
                <h2>Dashboard</h2>

                <Row className="justify-content-center align-items-center">
                    <Col md="auto">
                        <Select
                            value={this.props.stockHistorySymbol}
                            disabled={this.props.loading}
                            onChange={this.props.changeStockHistorySymbol}>
                            {
                                availableSymbols.map((symbol) =>
                                    <MenuItem key={symbol.name} value={symbol.value}>{symbol.name}</MenuItem>
                                )
                            }
                        </Select>
                    </Col>

                    <Col md="auto">
                        <Select
                            value={this.props.stockHistoryMode}
                            disabled={this.props.loading}
                            onChange={this.props.changeStockHistoryMode}>
                            {
                                availableModes.map((mode) =>
                                    <MenuItem key={mode.name} value={mode.value}>{mode.name}</MenuItem>
                                )
                            }
                        </Select>
                    </Col>

                    <Col md="auto">
                        <Row className="align-items-center no-gutters">
                            <Col md="auto">
                                <Typography>Full output</Typography>
                            </Col>

                            <Col md="auto">
                                <Switch
                                    color="primary"
                                    value={this.props.outputType}
                                    checked={this.props.outputType == 'full'}
                                    onChange={this.props.changeStockHistoryOutputType}>
                                </Switch>
                            </Col>

                            <Col md="auto">
                                <Typography>Compact output</Typography>
                            </Col>
                        </Row>
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
        outputType: state.history.outputType,
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
        },
        changeStockHistoryOutputType: (e) => {
            let type = e.target.checked ? 'full' : 'compact';

            return dispatch(stockHistoryActions.setStockHistoryOutputType(type));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

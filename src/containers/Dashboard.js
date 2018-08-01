import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import * as stockHistoryActions from '../actions/sotckHistoryActions';
import {
    availableStockModes,
    availableStockOutputTypes,
    availableStockSymbols,
    ohlcLineChartDefaults
} from '../shared/constants';

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
                                availableStockSymbols.map((symbol) =>
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
                                availableStockModes.map((mode) =>
                                    <MenuItem key={mode.name} value={mode.value}>{mode.name}</MenuItem>
                                )
                            }
                        </Select>
                    </Col>

                    <Col md="auto">
                        <Row className="align-items-center no-gutters">
                            <Col md="auto">
                                <Typography>Compact output</Typography>
                            </Col>

                            <Col md="auto">
                                <Switch
                                    color="primary"
                                    value={this.props.outputType}
                                    checked={this.props.outputType === availableStockOutputTypes.full}
                                    onChange={this.props.changeStockHistoryOutputType}>
                                </Switch>
                            </Col>

                            <Col md="auto">
                                <Typography>Full output</Typography>
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
                        ...ohlcLineChartDefaults,
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
            let outputType = e.target.checked ? availableStockOutputTypes.full : availableStockOutputTypes.compact;

            return dispatch(stockHistoryActions.setStockHistoryOutputType(outputType));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

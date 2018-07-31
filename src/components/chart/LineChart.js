import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    return(
        <Line data={props.data}></Line>
    );
}

export default LineChart;

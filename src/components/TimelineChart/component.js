import React, {Component} from 'react';
import {Chart} from 'react-google-charts';

class TimelineChart extends Component {

    columns = [
        {label: 'Time', type: 'number'},
        {label: 'Quantity', type: 'number'}
    ];

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    renderChart(columns, rows) {
        return <Chart
            chartType="LineChart"
            columns={columns}
            rows={rows}
            options={{
                animation: {
                    duration: 1000,
                    easing: 'out',
                    startup: true
                }
            }}
            graph_id="LineChart"
            width="100%"
            height="400px"
        />;
    }

    render() {

        if (this.props.values.length) {

            return (
                <div className="App">
                    {this.renderChart(this.columns, this.props.values)}
                </div>
            );

        } else {

            return (
                <div className="App">
                    Waiting for data....
                </div>
            );

        }
    }
}

export default TimelineChart;

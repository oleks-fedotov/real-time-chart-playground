import TimelineChart from './component.js';


import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        values: state.timeline.values
    }
};

const mapDispatchToProps = dispatch => ({});

const TimelineChartComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimelineChart);

export default TimelineChartComponent;
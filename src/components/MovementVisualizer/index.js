import MovementVisualizer from './component.js';


import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        ...state.movements
    }
};

const mapDispatchToProps = dispatch => ({});

const MovementVisualizerComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovementVisualizer);

export default MovementVisualizerComponent;
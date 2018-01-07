import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Motion, spring} from 'react-motion';

export default class MovementVisualizer extends Component {

    static propTypes = {
        objects: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired
        }))
    };

    componentWillReceiveProps(newProps) {

    }

    render() {

        return <Motion style={{x: spring(this.props.x), y: spring(this.props.y)}}>
            {
                ({x, y}) =>
                    <div className="movementVisualizerContainer">
                        <div className="movementVisualizerObject"
                             style={{height: this.props.height, width: this.props.width, top: y, left: x}}/>
                    </div>
            }
        </Motion>;

    }

}

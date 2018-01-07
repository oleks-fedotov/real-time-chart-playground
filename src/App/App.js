import React, {Component} from 'react';
import './App.css';

import TimelineChart from '../components/TimelineChart';
import MovementVisualizer from '../components/MovementVisualizer';

export default class App extends Component {

    render() {

        return (
            <div className="App">
                <TimelineChart/>
                <MovementVisualizer/>
            </div>
        );

    }
}
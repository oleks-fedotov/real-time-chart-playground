import React, {Component} from 'react';
import './App.css';

import TimelineChart from '../components/TimelineChart';

export default class App extends Component {

    render() {

        return (
            <div className="App">
                <TimelineChart/>
            </div>
        );

    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import timelineReducers from './components/TimelineChart/reducers';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:3001');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/');

const reducers = combineReducers({timeline: timelineReducers});

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

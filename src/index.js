import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Containers/Dashboard/Dashboard';
import {Provider} from 'react-redux'
import { createStore } from 'redux';

const store = createStore(()=>{});
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

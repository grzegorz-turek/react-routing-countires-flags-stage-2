import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import DevTools from './DevTools';
import { getCountries } from './actions/actions';
import './country.css';

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}>
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
)

store.dispatch(getCountries()); // testowy dispatch akcji getCountries
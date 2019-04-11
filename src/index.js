import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //install via npm
import {createStore, combineReducers} from 'redux'; //install via npm


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoReducer from './store/todo';

const rootReducer = combineReducers({
    todo : todoReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

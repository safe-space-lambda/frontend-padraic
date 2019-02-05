import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./reducers/index";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

axios.defaults.withCredentials = true;

const store = createStore(
    combineReducers,
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Route path='/' component={App} />
      </Router>
    </Provider>,
    document.getElementById("root")
);


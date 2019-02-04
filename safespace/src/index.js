import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    reducer,
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import configureStore from './store/configureStore';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor} = configureStore();
// const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* <App /> */}
  </Provider>,
  document.getElementById('root')
);


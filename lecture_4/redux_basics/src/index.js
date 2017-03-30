import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from "./containers/App";

let store = createStore(
  reducer,
  // f => f is identify function
  // Otherwise window.devToolsExtension is used as a store-enhancer which
  // integrates the store with Redux DevTools
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

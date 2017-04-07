import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import commentServerMiddleware from './middlewares/CommentServerMiddleware';
import loggingMiddleware from './middlewares/LoggingMiddleware';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeStoreEnhancers(
    applyMiddleware(
      thunk,
      commentServerMiddleware,
      loggingMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

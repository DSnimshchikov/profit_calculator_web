import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

function reduxStore(initialState) {
  const logger = createLogger()
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default reduxStore;

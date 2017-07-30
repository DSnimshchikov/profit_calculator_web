import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import App from './containers/App';
import Settings from './components/settings/Settings';
import configureStore from './stores';

const store = configureStore();

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/:id' component={App}/>
      <Route exact path='/settings' component={Settings}/>
    </Switch>
  </Router>
);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      {routing}
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          {routing}
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

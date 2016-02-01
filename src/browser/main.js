import Bluebird from 'bluebird';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import configureStore from '../common/configureStore';
import createRoutes from './createRoutes';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import messages from '../common/intl/messages';
import locale from './locale';

// http://bluebirdjs.com/docs/why-bluebird.html
window.Promise = Bluebird;

const app = document.getElementById('app');
const initialState = window.__INITIAL_STATE__;
const store = configureStore({initialState});
const routes = createRoutes(store.getState);
const currentLocale = locale('en', Object.keys(messages));

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>,
  app
);

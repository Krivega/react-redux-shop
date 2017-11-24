import { render } from 'react-dom';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import 'normalize.css';

import configureStore from 'configureStore';
import App from 'components/App';
import registerServiceWorker from 'registerServiceWorker';
import { testUpdatesComponents } from 'developerTools';

if (process.env.NODE_ENV !== 'production') {
  testUpdatesComponents(React);
}

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

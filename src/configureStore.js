import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import getCartStorage from 'containers/Cart/localStorage';
import sagas from './sagas';
import { fromJS } from 'immutable';

export default function storeConfigure(history) {
  const sagaMiddleware = createSagaMiddleware();
  const persistedState = loadState();
  const store = createStore(
    reducers,
    fromJS(persistedState),
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );

  sagaMiddleware.run(sagas);

  store.subscribe(
    throttle(() => {
      const state = store.getState();
      const cartStorage = getCartStorage(state);

      saveState({ ...cartStorage });
    }, 1000)
  );

  return store;
}

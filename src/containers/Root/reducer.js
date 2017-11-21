import { Map } from 'immutable';
import { RESET_APP } from './constants';
import {
  getStore as getStoreRouter,
  storeName as storeNameRouter
} from 'containers/Router/selectors';

export default function(state, action) {
  switch (action.type) {
    case RESET_APP:
      return Map({
        [storeNameRouter]: getStoreRouter(state)
      });
    default:
      return state;
  }
}

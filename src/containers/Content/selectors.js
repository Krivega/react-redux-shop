import { createSelector } from 'reselect';
import { getStore as getStoreRouter } from 'containers/Router/selectors';

export const storeName = 'location';

export function getStore(state) {
  return getStoreRouter(state).get(storeName);
}

export default createSelector(getStore, store => ({
  location: store
}));

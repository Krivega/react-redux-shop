import { createSelector } from 'reselect';

export const storeName = 'aboutInfo';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => ({
  info: store.get('info')
}));

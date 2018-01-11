import { createSelector } from 'reselect';

export const storeName = 'intl';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => {
  return store.toJS();
});

import { createSelector } from 'reselect';
import { storeName, getStore } from './selectors';

export default createSelector(getStore, store => {
  return {
    [storeName]: store.toJS()
  };
});

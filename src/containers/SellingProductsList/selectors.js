import { createSelector } from 'reselect';
export const storeName = 'sellingProducts';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => {
  return {
    items: store.get('items'),
    currency: store.get('currency')
  };
});

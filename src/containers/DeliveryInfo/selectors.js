import { createSelector } from 'reselect';

export const storeName = 'deliveryInfo';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => ({
  titleToken: store.get('titleToken'),
  descriptionToken: store.get('descriptionToken')
}));

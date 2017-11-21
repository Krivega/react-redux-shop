import { createSelector } from 'reselect';
import { getStore as getStoreOrder } from 'containers/Order/selectors';

export const storeName = 'address';

export function getStore(state) {
  return getStoreOrder(state).get(storeName);
}

export default createSelector(getStore, store => ({
  street: store.get('street'),
  name: store.get('name'),
  email: store.get('email'),
  phone: store.get('phone')
}));

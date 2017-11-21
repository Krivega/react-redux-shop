import { createSelector } from 'reselect';

export const storeName = 'contactsInfo';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => ({
  phoneNumber: store.get('phoneNumber'),
  email: store.get('email')
}));

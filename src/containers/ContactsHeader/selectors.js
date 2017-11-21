import { createSelector } from 'reselect';
import { getStore as getStoreContacts } from 'containers/ContactsInfo/selectors';

export function getStore(state) {
  return getStoreContacts(state);
}

export default createSelector(getStore, store => ({
  phoneNumber: store.get('phoneNumber')
}));

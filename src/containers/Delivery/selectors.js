import { createSelector } from 'reselect';

import { List } from 'immutable';

export const storeName = 'delivery';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, store => {
  const listCities = store.get('listCities');

  if (listCities && listCities.size !== 0) {
    store = store.update('listCities', listCities =>
      listCities.map(item => {
        return item.set('text', item.get('name'));
      })
    );
  } else {
    store = store.set('listCities', List());
  }

  return {
    listCities: store.get('listCities'),
    selectedCityName: store.getIn(['selectedCity', 'name']),
    requestedListCities: store.get('requestedListCities')
  };
});

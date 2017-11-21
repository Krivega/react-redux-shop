import { createSelector } from 'reselect';

import { getStore as getStoreRouter } from 'containers/Router/selectors';

export const storeName = 'generalMenu';

function getFirstLevelPath(path) {
  return path.split('/')[1];
}

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, getStoreRouter, (store, routerStore) => {
  const firstLevelPath = getFirstLevelPath(routerStore.get('location').pathname);
  let activeIndex;

  store.get('items').map((item, index) => {
    if (firstLevelPath === getFirstLevelPath(item.get('link'))) {
      activeIndex = index;
    }

    return item;
  });

  store = store.set('activeIndex', activeIndex).setIn(['items', activeIndex, 'active'], true);

  return {
    items: store.get('items'),
    activeIndex: store.get('activeIndex')
  };
});

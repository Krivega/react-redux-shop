import { createSelector } from 'reselect';
import { getStore } from 'containers/Cart/selectors';

export function getSummaryCount(state) {
  let summaryCount = 0;

  state.get('items').map(item => {
    summaryCount += item.get('count');

    return item;
  });

  return summaryCount;
}

export default createSelector(getStore, store => ({
  count: getSummaryCount(store)
}));

import { createSelector } from 'reselect';
import { getStore as getStoreCart } from 'containers/Cart/selectors';

export default createSelector(getStoreCart, store => {
  return {
    openCart: store.get('openCart')
  };
});

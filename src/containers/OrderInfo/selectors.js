import { createSelector } from 'reselect';
import { getStore as getStoreOrder } from 'containers/Order/selectors';
import { getStore as getStoreCart, parseStoreWithProducts } from 'containers/Cart/selectors';
import { getStore as getStoreSellingProductsList } from 'containers/SellingProductsList/selectors';

export const storeName = 'info';

export function getStore(state) {
  return getStoreOrder(state).get(storeName);
}

export default createSelector(
  getStore,
  getStoreCart,
  getStoreSellingProductsList,
  (store, storeCart, productsStore) => {
    storeCart = parseStoreWithProducts(storeCart, productsStore);

    return {
      sended: store.get('sended'),
      sending: store.get('sending'),
      cartItems: storeCart
        .get('items')
        .toIndexedSeq()
        .toArray(),
      cartTotal: storeCart.get('total'),
      currency: storeCart.get('currency')
    };
  }
);

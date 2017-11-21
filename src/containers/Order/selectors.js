import { createSelector } from 'reselect';
import { getStore as getStoreCart, parseStoreWithProducts } from 'containers/Cart/selectors';
import { getStore as getStoreOrderInfo } from 'containers/OrderInfo/selectors';

import { getStore as getStoreSellingProductsList } from 'containers/SellingProductsList/selectors';

export const storeName = 'order';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(
  getStoreOrderInfo,
  getStoreCart,
  getStoreSellingProductsList,
  (storeOrderInfo, storeCart, productsStore) => {
    storeCart = parseStoreWithProducts(storeCart, productsStore);

    return {
      openOrder: storeOrderInfo.get('openOrder'),
      sended: storeOrderInfo.get('sended'),
      cartSize: storeCart.get('items').size
    };
  }
);

import { createSelector } from 'reselect';
import { getStore as getStoreSellingProductsList } from 'containers/SellingProductsList/selectors';

export const storeName = 'cart';

export function getStore(state) {
  return state.get(storeName);
}

// export const findItemById = (items, id) => items.get(id);
export const findItemById = (items, id) => items.find(item => item.get('id') === id);

export function parseStoreWithProducts(store, productsStore) {
  let total = 0;
  const productsItems = productsStore.get('items');
  const currency = productsStore.get('currency');

  store = store.update('items', items =>
    items.map(item => {
      const product = findItemById(productsItems, item.get('id'));
      const productName = product.get('shortName');
      const productPrice = product.get('price');
      const productImage = product.get('image');
      const count = item.get('count');

      total += count * productPrice;

      return item
        .set('orderedQuantity', count * productPrice)
        .set('productName', productName)
        .set('productImage', productImage)
        .set('productPrice', productPrice);
    })
  );

  return store.set('total', total).set('currency', currency);
}

export default createSelector(getStore, getStoreSellingProductsList, (store, productsStore) => {
  store = parseStoreWithProducts(store, productsStore);

  return {
    items: store
      .get('items')
      .toIndexedSeq()
      .toArray(),
    total: store.get('total'),
    currency: store.get('currency'),
    openCart: store.get('openCart')
  };
});

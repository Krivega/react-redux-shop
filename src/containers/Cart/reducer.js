import { fromJS, Map } from 'immutable';

import { ADD_TO_CART, TOGGLE_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT_CART } from './constants';
import { storeName } from './selectors';

const initialState = fromJS({
  items: {},
  openCart: false
});

function toggleCart(state) {
  return state.update('openCart', value => !value);
}

function incrementItemCountCart(item, id, count) {
  if (!item) {
    item = Map({
      id,
      count: 0
    });
  }

  return item.update('count', value => value + count);
}

function addToCart(state, { productId: id, count }) {
  let item = state.getIn(['items', id]);

  item = incrementItemCountCart(item, id, count);

  return state.setIn(['items', id], item);
}

function changeItemCountCart(state, { productId: id, value }) {
  if (+value <= 0) {
    return removeFromCart(state, { productId: id });
  }

  return state.setIn(['items', id, 'count'], value);
}

function removeFromCart(state, { productId }) {
  state = state.deleteIn(['items', productId]);

  if (state.get('items').size === 0) {
    state = state.set('openCart', false);
  }

  return state;
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        return addToCart(state, action.data);
      case TOGGLE_CART:
        return toggleCart(state);
      case CHANGE_ITEM_COUNT_CART:
        return changeItemCountCart(state, action.data);
      case REMOVE_FROM_CART:
        return removeFromCart(state, action.data);
      default:
        return state;
    }
  }
};

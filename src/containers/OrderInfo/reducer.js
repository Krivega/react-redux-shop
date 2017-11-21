import { fromJS } from 'immutable';

import { OPEN_ORDER, CLOSE_ORDER, CHECKOUT, SENDED_ORDER, SET_REQUESTED_ORDER } from './constants';
import { storeName } from './selectors';

const initialState = fromJS({
  openOrder: false,
  sending: false,
  sended: false
});

function openOrder(state) {
  return state.set('openOrder', true);
}

function closeOder(state) {
  return state.set('openOrder', false);
}

function sending(state) {
  return state.set('sending', true);
}

function sended(state) {
  return state.set('sending', false).set('sended', true);
}

function checkout(state) {
  return state.update('openOrder', value => !value);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case OPEN_ORDER:
        return openOrder(state);
      case CLOSE_ORDER:
        return closeOder(state);
      case CHECKOUT:
        return checkout(state);
      case SET_REQUESTED_ORDER:
        return sending(state);
      case SENDED_ORDER:
        return sended(state);
      default:
        return state;
    }
  }
};

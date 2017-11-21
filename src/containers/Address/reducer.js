import { fromJS } from 'immutable';

import {
  CHANGE_STREET_ADDRESS,
  CHANGE_NAME_ADDRESS,
  CHANGE_PHONE_ADDRESS,
  CHANGE_EMAIL_ADDRESS
} from './constants';
import { storeName } from './selectors';

const initialState = fromJS({});

function setName(state, { query }) {
  return state.set('name', query);
}

function setStreet(state, { query }) {
  return state.set('street', query);
}

function setEmail(state, { query }) {
  return state.set('email', query);
}

function setPhone(state, { query }) {
  return state.set('phone', query);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case CHANGE_STREET_ADDRESS:
        return setStreet(state, action.data);
      case CHANGE_NAME_ADDRESS:
        return setName(state, action.data);
      case CHANGE_EMAIL_ADDRESS:
        return setEmail(state, action.data);
      case CHANGE_PHONE_ADDRESS:
        return setPhone(state, action.data);
      default:
        return state;
    }
  }
};

import { fromJS, List } from 'immutable';

import {
  SET_LIST_CITIES,
  SELECT_CITY,
  RESET_LIST_CITIES,
  REQUESTED_LIST_CITIES
} from './constants';
import { storeName } from './selectors';

const initialState = fromJS({
  listCities: [],
  requestedListCities: false
});

function setItems(state, { list }) {
  return unsetRequestedListCities(state.set('listCities', fromJS(list)));
}

function resetItems(state) {
  return unsetRequestedListCities(state).set('listCities', List());
}

function setRequestedListCities(state) {
  return state
    .set('requestedListCities', true)
    .delete('selectedCity')
    .set('listCities', List());
}

function unsetRequestedListCities(state) {
  return state.set('requestedListCities', false);
}

function select(state, { id }) {
  const selectedCity = state.get('listCities').find(item => item.get('id') === id);

  state = resetItems(state);

  return state.set('selectedCity', selectedCity);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case SET_LIST_CITIES:
        return setItems(state, action.data);
      case RESET_LIST_CITIES:
        return resetItems(state, action.data);
      case SELECT_CITY:
        return select(state, action.data);
      case REQUESTED_LIST_CITIES:
        return setRequestedListCities(state, action.data);
      default:
        return state;
    }
  }
};

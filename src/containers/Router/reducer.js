import { fromJS } from 'immutable';
import { storeName } from './selectors';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  location: null
});

export default {
  [storeName]: function(state = initialState, { type, payload } = {}) {
    if (type === LOCATION_CHANGE) {
      return state.set('location', payload);
    }

    return state;
  }
};

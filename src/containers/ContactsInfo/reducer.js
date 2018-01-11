import { fromJS } from 'immutable';
import { storeName } from './selectors';
import initialData from './data.json';

const initialState = fromJS(initialData);

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

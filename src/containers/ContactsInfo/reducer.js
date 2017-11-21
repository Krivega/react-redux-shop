import { fromJS } from 'immutable';
import { storeName } from './selectors';

const initialState = fromJS({
  phoneNumber: '8 800 700 8000',
  email: 'info@demo-midforest.com.com'
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

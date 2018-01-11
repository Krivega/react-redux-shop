import { fromJS } from 'immutable';
import { storeName } from './selectors';

const initialState = fromJS({
  titleToken: 'delivery.title',
  descriptionToken: 'delivery.description'
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

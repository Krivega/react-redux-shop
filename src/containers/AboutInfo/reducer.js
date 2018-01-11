import { fromJS } from 'immutable';
import { storeName } from './selectors';

const initialState = fromJS({
  titleToken: 'aboutInfo.title',
  descriptionToken: 'aboutInfo.description'
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

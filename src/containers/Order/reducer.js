import { combineReducers } from 'redux-immutable';
import { storeName } from './selectors';
import orderInfoReducer from 'containers/OrderInfo/reducer';
import addressReducer from 'containers/Address/reducer';

export default {
  [storeName]: combineReducers({
    ...orderInfoReducer,
    ...addressReducer
  })
};

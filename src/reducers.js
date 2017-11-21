import { combineReducers } from 'redux-immutable';
import rootReducer from 'containers/Root/reducer';
import routerReducer from 'containers/Router/reducer';
import generalMenuReducer from 'containers/GeneralMenu/reducer';
import aboutInfoReducer from 'containers/AboutInfo/reducer';
import deliveryInfoReducer from 'containers/DeliveryInfo/reducer';
import contactsInfoReducer from 'containers/ContactsInfo/reducer';
import sellingProductsListReducer from 'containers/SellingProductsList/reducer';
import cartReducer from 'containers/Cart/reducer';
import orderReducer from 'containers/Order/reducer';
import deliveryReducer from 'containers/Delivery/reducer';

const appReducer = combineReducers({
  ...routerReducer,
  ...generalMenuReducer,
  ...sellingProductsListReducer,
  ...aboutInfoReducer,
  ...deliveryInfoReducer,
  ...contactsInfoReducer,
  ...cartReducer,
  ...orderReducer,
  ...deliveryReducer
});

export default (state, action) => {
  state = rootReducer(state, action);
  return appReducer(state, action);
};

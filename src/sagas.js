import { all } from 'redux-saga/effects';
import { getListCitiesSaga } from 'containers/Delivery/sagas';
import { sendOrderSaga } from 'containers/OrderInfo/sagas';

export default function* sagas() {
  yield all([getListCitiesSaga(), sendOrderSaga()]);
}

import { SEND_ORDER } from './constants';
import { delay } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchSendOrder } from 'api';
import { setRequested, orderSended } from './actions';
import { reset } from 'containers/Root/actions';
import { getStore as getStoreAddress } from 'containers/Address/selectors';
import { getCart as getStoreCart } from 'containers/Cart/selectors';

function* sendOrder() {
  try {
    yield put(setRequested());

    const address = yield select(getStoreAddress);
    const cart = yield select(getStoreCart);
    const sendOrderFetch = yield call(fetchSendOrder, {
      address,
      cart
    });
    const response = yield sendOrderFetch.json();

    yield delay(5000); // for displaying / testing the loader
    yield put(orderSended(response));
    yield delay(5000); // to display a message of successful sending
    yield put(reset());
  } catch (e) {}
}

export function* sendOrderSaga() {
  yield takeLatest(SEND_ORDER, sendOrder);
}

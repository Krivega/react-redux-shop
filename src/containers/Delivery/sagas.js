import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_LIST_CITIES } from './constants';
import { fetchListCities } from 'api';
import { setListCities, resetListCities, setRequestedListCities } from './actions';

function* getListCities(action) {
  try {
    const { query } = action.data;
    if (query) {
      yield put(setRequestedListCities());
      const geonamesFetch = yield call(fetchListCities, {
        query
      });
      const response = yield geonamesFetch.json();
      yield put(setListCities(response.geonames));
    } else {
      yield put(resetListCities());
    }
  } catch (e) {}
}

export function* getListCitiesSaga() {
  yield takeLatest(GET_LIST_CITIES, getListCities);
}

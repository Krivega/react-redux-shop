import {
  GET_LIST_CITIES,
  SET_LIST_CITIES,
  RESET_LIST_CITIES,
  SELECT_CITY,
  REQUESTED_LIST_CITIES
} from './constants';

export const getListCities = query => {
  return {
    type: GET_LIST_CITIES,
    data: { query }
  };
};

export const setListCities = list => {
  return {
    type: SET_LIST_CITIES,
    data: { list }
  };
};

export const resetListCities = () => {
  return {
    type: RESET_LIST_CITIES,
    data: {}
  };
};

export const setRequestedListCities = () => {
  return {
    type: REQUESTED_LIST_CITIES,
    data: {}
  };
};

export const selectCity = id => {
  return {
    type: SELECT_CITY,
    data: { id }
  };
};

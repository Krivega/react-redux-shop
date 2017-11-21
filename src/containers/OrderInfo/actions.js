import {
  OPEN_ORDER,
  CLOSE_ORDER,
  CHECKOUT,
  SEND_ORDER,
  SENDED_ORDER,
  SET_REQUESTED_ORDER
} from './constants';

export const openOrder = () => {
  return {
    type: OPEN_ORDER,
    data: {}
  };
};
export const closeOrder = () => {
  return {
    type: CLOSE_ORDER,
    data: {}
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT,
    data: {}
  };
};

export const send = () => {
  return {
    type: SEND_ORDER,
    data: {}
  };
};

export const setRequested = () => {
  return {
    type: SET_REQUESTED_ORDER,
    data: {}
  };
};

export const orderSended = () => {
  return {
    type: SENDED_ORDER,
    data: {}
  };
};

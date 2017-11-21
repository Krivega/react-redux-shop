import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_ITEM_COUNT_CART, TOGGLE_CART } from './constants';

export const addToCart = (productId, count) => {
  return {
    type: ADD_TO_CART,
    data: { productId, count }
  };
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    data: { productId }
  };
};

export const changeItemCountCart = (productId, value) => {
  return {
    type: CHANGE_ITEM_COUNT_CART,
    data: { productId, value }
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
    data: {}
  };
};

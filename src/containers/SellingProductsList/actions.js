import { SET_ITEM_ACTIVE } from './constants';

export const setItemActive = activeId => {
  return {
    type: SET_ITEM_ACTIVE,
    data: { activeId }
  };
};

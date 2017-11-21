import { RESET_APP } from './constants';

export const reset = () => {
  return {
    type: RESET_APP,
    data: {}
  };
};

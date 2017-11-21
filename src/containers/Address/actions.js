import {
  CHANGE_NAME_ADDRESS,
  CHANGE_STREET_ADDRESS,
  CHANGE_PHONE_ADDRESS,
  CHANGE_EMAIL_ADDRESS
} from './constants';

export const changeStreet = query => {
  return {
    type: CHANGE_STREET_ADDRESS,
    data: { query }
  };
};

export const changePhone = query => {
  return {
    type: CHANGE_PHONE_ADDRESS,
    data: { query }
  };
};

export const changeEmail = query => {
  return {
    type: CHANGE_EMAIL_ADDRESS,
    data: { query }
  };
};

export const changeName = query => {
  return {
    type: CHANGE_NAME_ADDRESS,
    data: { query }
  };
};

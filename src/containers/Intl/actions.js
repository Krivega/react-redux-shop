import { UPDATE } from './constants';

export const updateIntl = ({ locale, formats, messages }) => ({
  type: UPDATE,
  payload: { locale, formats, messages }
});

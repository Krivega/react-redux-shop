import { fromJS } from 'immutable';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { storeName } from './selectors';
import { UPDATE } from './constants';
import messages from './messages.js';

const defaultLocale = 'en';
let locale = navigator.language || defaultLocale;
let messagesLocale = messages[locale];

if (!messagesLocale) {
  locale = defaultLocale;
  messagesLocale = messages[locale];
}

const initialState = fromJS({
  locale,
  messages: messagesLocale
});

addLocaleData([...en, ...ru]);

export default {
  [storeName]: function(state = initialState, { type, payload } = {}) {
    if (type === UPDATE) {
      return state.set(...payload);
    }

    return state;
  }
};

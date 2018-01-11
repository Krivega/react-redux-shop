import { fromJS } from 'immutable';

import { storeName } from './selectors';

const initialState = fromJS({
  items: [
    { id: 'products', link: '/', token: 'products', icon: 'view_day' },
    { id: 'aboutUs', link: '/about', token: 'aboutUs', icon: 'info' },
    { id: 'delivery', link: '/delivery', token: 'delivery', icon: 'local_shipping' },
    { id: 'contacts', link: '/contacts', token: 'contacts', icon: 'place' }
  ]
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

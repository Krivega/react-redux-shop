import { fromJS } from 'immutable';

import { storeName } from './selectors';

const initialState = fromJS({
  items: [
    { id: 'products', link: '/', text: 'Products', icon: 'view_day' },
    { id: 'aboutUs', link: '/about', text: 'About us', icon: 'info' },
    { id: 'delivery', link: '/delivery', text: 'Delivery', icon: 'local_shipping' },
    { id: 'contacts', link: '/contacts', text: 'Contacts', icon: 'place' }
  ]
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

import { fromJS } from 'immutable';
import { storeName } from './selectors';

const initialState = fromJS({
  info:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id. Velit aliquet sagittis id consectetur purus. Rutrum tellus pellentesque eu tincidunt. In arcu cursus euismod quis viverra nibh. Lectus nulla at volutpat diam. Egestas erat imperdiet sed euismod. Euismod in pellentesque massa placerat duis ultricies lacus. A arcu cursus vitae congue. Dignissim convallis aenean et tortor. Fermentum posuere urna nec tincidunt. Ullamcorper eget nulla facilisi etiam dignissim diam. Enim neque volutpat ac tincidunt vitae semper quis. Pellentesque elit eget gravida cum sociis. Aliquam ultrices sagittis orci a. Turpis cursus in hac habitasse. Urna porttitor rhoncus dolor purus non. Non blandit massa enim nec dui. Augue ut lectus arcu bibendum at varius vel. Sem fringilla ut morbi tincidunt.'
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

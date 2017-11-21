import { fromJS } from 'immutable';
import { storeName } from './selectors';

const initialState = fromJS({
  items: [
    {
      id: 'ferns',
      name: 'Ferns',
      shortName: 'Ferns',
      packageName: 'World creation',
      price: 1700,
      image: 'images/ferns.jpg',
      description:
        'Large cozy kettle for four bowls. Ideal for fragrant herbal teas and strong hugs.\nVolume about 800 ml'
    },
    {
      id: 'piala1',
      name: 'Piala',
      shortName: 'Piala',
      packageName: 'World creation',
      price: 500,
      image: 'images/piala1.jpg',
      description: 'Warm human dwellings'
    },
    {
      id: 'turk',
      name: 'Child of the Earth',
      shortName: 'Turk',
      packageName: 'World Forest Guardians',
      price: 1200,
      image: 'images/turk.jpg',
      description:
        'Big Turk "Child of the Earth" talks about the Guardian\'s song, a wooden pipe, and how the Lesa grasses listened attentively to her.\nVolume of 250 ml\nClay, glaze (enamel), milking, wood'
    },
    {
      id: 'box',
      name: 'Box with Guardian Forest',
      shortName: 'Box',
      packageName: 'World Forest Guardians',
      price: 800,
      image: 'images/box.jpg',
      description:
        'Box with the Guardian Forest. Suitable for storing snowy sugar cranberries, rings and secrets.\nInside, the last green leaf hides from the cold.\nDimensions: 9x9x5 cm'
    }
  ],
  currency: '$'
});

export default {
  [storeName]: function(state = initialState, action) {
    return state;
  }
};

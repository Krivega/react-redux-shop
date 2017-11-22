import React from 'react';
import { stringify as bem } from 'rebem-classname';
import Header from 'components/Header';
import Main from 'components/Main';
import Cart from 'containers/Cart';
import Order from 'containers/Order';

import './style.css';

const block = 'app';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className={bem({ block })}>
        <div className={bem({ block, elem: 'container' })}>
          <Header />
          <div className={bem({ block, elem: 'body' })}>
            <Main />
          </div>

          <div className={bem({ block, elem: 'bg' })} />
        </div>
        <Cart />

        <Order />
      </div>
    );
  }
}

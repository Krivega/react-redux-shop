import React from 'react';
import GeneralMenu from 'containers/GeneralMenu';
import ContactsHeader from 'containers/ContactsHeader';
import CartIndicator from 'containers/CartIndicator';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'header';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className={bem({ block })}>
        <div className={bem({ block, elem: 'content' })}>
          <div className={bem({ block, elem: 'primary' })}>
            <GeneralMenu />
          </div>
          <div className={bem({ block, elem: 'secondary' })}>
            <ContactsHeader />
          </div>
          <CartIndicator />
        </div>
      </header>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'cart-list';

export default class CartList extends React.PureComponent {
  static propTypes = {
    indented: PropTypes.bool
  };

  getBemMods() {
    return {
      indented: !!this.props.indented
    };
  }

  renderItem = Child => {
    return (
      <li className={bem({ block, elem: 'item' })} key={Child.key}>
        {Child}
      </li>
    );
  };

  render() {
    const { children } = this.props;

    return (
      <ul className={bem({ block, mods: this.getBemMods() })}>
        {React.Children.map(children, this.renderItem)}
      </ul>
    );
  }
}

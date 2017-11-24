import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'cart-total';

export default class Carttotal extends React.PureComponent {
  static propTypes = {
    indented: PropTypes.bool
  };

  getBemMods() {
    return {
      indented: !!this.props.indented
    };
  }

  render() {
    const { children } = this.props;

    return <div className={bem({ block, mods: this.getBemMods() })}>{children}</div>;
  }
}

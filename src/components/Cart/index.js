import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'cart';

export default class Cart extends React.Component {
  static propTypes = {
    openCart: PropTypes.bool,
    onClickClose: PropTypes.func
  };

  getBemMods() {
    return {
      open: !!this.props.openCart
    };
  }

  render() {
    return (
      <div className={bem({ block, mods: this.getBemMods() })}>
        <div className={bem({ block, elem: 'actions' })}>
          <Button stretch icon="close" onClick={this.props.onClickClose} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

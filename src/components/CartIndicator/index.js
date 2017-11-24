import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Fab from 'components/Fab';

import './style.css';

const block = 'cart-indicator';

export default class CartIndicator extends React.PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func
  };

  handleClick = event => {
    const { onClick } = this.props;

    if (onClick === undefined || this.isDisabled()) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  isDisabled() {
    const { count } = this.props;

    return count === undefined || count === 0;
  }

  render() {
    const { count } = this.props;

    return (
      <div className={bem({ block })} onClick={this.handleClick}>
        <Fab icon="shopping_cart" badge={count} disabled={this.isDisabled()} />
      </div>
    );
  }
}

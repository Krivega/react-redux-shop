import React from 'react';

import Overlay from 'components/Overlay';
import OrderInfo from 'containers/OrderInfo';

export default class Order extends React.PureComponent {
  static defaultProps = {
    openOrder: false
  };

  getActions() {
    const actions = [
      {
        text: 'Cancel',
        onClick: this.props.onClose
      },
      {
        text: 'Checkout',
        onClick: this.props.onCheckout.bind(this),
        primary: true
      }
    ];

    return actions;
  }

  render() {
    const { openOrder, cartSize, sended } = this.props;

    if (cartSize === 0) {
      return null;
    }

    return (
      <Overlay
        open={openOrder}
        title={sended ? null : 'Order'}
        onClose={this.props.onClose}
        actions={sended ? [] : this.getActions()}
      >
        <OrderInfo />
      </Overlay>
    );
  }
}

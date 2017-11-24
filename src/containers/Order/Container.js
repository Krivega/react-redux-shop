import React from 'react';

import Overlay from 'components/Overlay';
import OrderInfo from 'containers/OrderInfo';
import ScrollableContent from 'components/ScrollableContent';
import Actions from 'components/Actions';
import Button from 'components/Button';

export default class Order extends React.PureComponent {
  static defaultProps = {
    openOrder: false
  };

  renderActions() {
    const { sended } = this.props;

    if (sended) {
      return null;
    }

    return (
      <Actions>
        <Button key="cancel" onClick={this.props.onClose}>
          Cancel
        </Button>
        <Button key="checkout" onClick={this.props.onCheckout} raised>
          Checkout
        </Button>
      </Actions>
    );
  }

  render() {
    const { openOrder, cartSize, sended } = this.props;
    const title = sended ? null : 'Order';

    if (cartSize === 0) {
      return null;
    }

    return (
      <Overlay open={openOrder} title={title} onClose={this.props.onClose}>
        <ScrollableContent>
          <OrderInfo />
        </ScrollableContent>
        {this.renderActions()}
      </Overlay>
    );
  }
}

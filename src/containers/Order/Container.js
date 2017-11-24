import React from 'react';

import Overlay from 'components/Overlay';
import OrderInfo from 'containers/OrderInfo';
import ScrollableContent from 'components/ScrollableContent';
import Actions from 'components/Actions';
import Button from 'components/Button';

export default class Order extends React.Component {
  static defaultProps = {
    openOrder: false
  };

  shouldComponentUpdate(nextProps) {
    return (
      (nextProps.cartSize !== this.props.cartSize && this.props.cartSize === 0) ||
      nextProps.openOrder !== this.props.openOrder ||
      nextProps.sended !== this.props.sended
    );
  }

  renderActions() {
    const { sended, openOrder } = this.props;

    if (sended || !openOrder) {
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

  renderContent() {
    const { openOrder } = this.props;

    if (!openOrder) {
      return null;
    }

    return (
      <ScrollableContent>
        <OrderInfo />
      </ScrollableContent>
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
        {this.renderContent()}
        {this.renderActions()}
      </Overlay>
    );
  }
}

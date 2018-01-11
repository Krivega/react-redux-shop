import React from 'react';

import Overlay from 'components/Overlay';
import OrderInfo from 'containers/OrderInfo';
import ScrollableContent from 'components/ScrollableContent';
import Actions from 'components/Actions';
import Button from 'components/Button';
import { FormattedMessage } from 'react-intl';

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
          <FormattedMessage id="cancel" />
        </Button>
        <Button key="checkout" onClick={this.props.onCheckout} raised>
          <FormattedMessage id="checkout" />
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
    const titleToken = sended ? null : 'order';

    if (cartSize === 0) {
      return null;
    }

    return (
      <Overlay open={openOrder} titleToken={titleToken} onClose={this.props.onClose}>
        {this.renderContent()}
        {this.renderActions()}
      </Overlay>
    );
  }
}

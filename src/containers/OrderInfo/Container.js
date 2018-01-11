import React from 'react';

import CartList from 'components/CartList';
import CartItem from 'components/CartItem';
import Carttotal from 'components/Carttotal';
import Address from 'containers/Address';
import Delivery from 'containers/Delivery';
import Heading from 'components/Heading';
import Money from 'components/Money';
import Loader from 'components/Loader';
import { FormattedMessage } from 'react-intl';

export default class OrderInfo extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.cartTotal !== this.props.cartTotal ||
      nextProps.sending !== this.props.sending ||
      nextProps.sended !== this.props.sended
    );
  }

  renderItem = (item, index) => {
    const id = item.get('id');
    const { currency } = this.props;

    return (
      <CartItem
        readonly
        id={id}
        key={id}
        productName={item.get('productName')}
        productPrice={item.get('productPrice')}
        currency={currency}
        productImage={item.get('productImage')}
        count={item.get('count')}
        orderedQuantity={item.get('orderedQuantity')}
      />
    );
  };

  render() {
    const { cartItems, cartTotal, currency, sending, sended } = this.props;

    if (cartItems.size === 0) {
      return null;
    }

    if (sended) {
      return (
        <div>
          <Heading title indented>
            <FormattedMessage id="success.title" />
          </Heading>
          <FormattedMessage id="success.description" />
          <Heading sub2 red>
            This demo content is created to demonstrate the skills of development
          </Heading>
        </div>
      );
    }

    return (
      <div>
        <CartList indented>{cartItems.map(this.renderItem)}</CartList>
        <Carttotal indented>
          <Money value={cartTotal} currency={currency} />
        </Carttotal>
        <Heading title indented>
          <FormattedMessage id="deliveryInfo" />
        </Heading>
        <Delivery />
        <Address />
        <Loader active={sending} fullscreen />
      </div>
    );
  }
}

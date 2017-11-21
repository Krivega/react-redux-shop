import React from 'react';

import CartList from 'components/CartList';
import CartItem from 'components/CartItem';
import Carttotal from 'components/Carttotal';
import Address from 'containers/Address';
import Delivery from 'containers/Delivery';
import Heading from 'components/Heading';
import Money from 'components/Money';
import Loader from 'components/Loader';

export default class OrderInfo extends React.PureComponent {
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
      return '';
    }

    if (sended) {
      return (
        <div>
          <Heading title indented>
            Success!
          </Heading>
          Your order was successfully sent.
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
          Delivery info
        </Heading>
        <Delivery />
        <Address />
        <Loader active={sending} fullscreen />
      </div>
    );
  }
}

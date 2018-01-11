import React from 'react';
import SlidableList from 'components/SlidableList';
import Product from 'components/Product';
import Button from 'components/Button';
import { FormattedMessage } from 'react-intl';

export default class SellingProductsList extends React.PureComponent {
  handleClickBuy = id => {
    return this.props.onClickBuy(id);
  };

  renderItem = (item, index) => {
    const { currency } = this.props;
    const id = item.get('id');

    return (
      <Product
        key={id}
        id={id}
        name={item.get('name')}
        packageName={item.get('packageName')}
        price={item.get('price')}
        currency={currency}
        image={item.get('image')}
        imagePlaceholder={item.get('imagePlaceholder')}
        description={item.get('description')}
      >
        <Button raised onClick={this.handleClickBuy.bind(this, id)}>
          <FormattedMessage id="addToCart" />
        </Button>
      </Product>
    );
  };

  render() {
    let { items } = this.props;

    return <SlidableList size={items.size}>{items.map(this.renderItem)}</SlidableList>;
  }
}

import React from 'react';
import SlidableList from 'components/SlidableList';
import Product from 'components/Product';
import Button from 'components/Button';

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
        description={item.get('description')}
      >
        <Button raised onClick={this.handleClickBuy.bind(this, id)}>
          ADD TO CART
        </Button>
      </Product>
    );
  };

  render() {
    let { items } = this.props;

    return <SlidableList size={items.size}>{items.map(this.renderItem)}</SlidableList>;
  }
}

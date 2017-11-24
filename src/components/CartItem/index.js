import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import Icon from 'components/Icon';
import Numberpicker from 'components/Numberpicker';
import Money from 'components/Money';
import { stringify as bem } from 'rebem-classname';
import features from 'features';

import './style.css';

const block = 'cart-item';

export default class CartItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    orderedQuantity: PropTypes.number.isRequired,
    readonly: PropTypes.bool,
    onClickRemove: PropTypes.func,
    onChangeItemCount: PropTypes.func
  };

  getBemMods() {
    return { readonly: !!this.props.readonly };
  }

  handleClickRemove = event => {
    const { onClickRemove, id } = this.props;

    if (onClickRemove === undefined) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClickRemove(id);
  };

  handleChange = value => {
    const { onChangeItemCount, id } = this.props;

    if (onChangeItemCount === undefined) {
      return;
    }

    onChangeItemCount(id, value);
  };

  renderImage() {
    const { productImage, readonly } = this.props;

    if (readonly) {
      return null;
    }

    const src = `/${productImage}`;

    return (
      <div className={bem({ block, elem: 'image' })}>
        <Image src={src} circle small fit />
      </div>
    );
  }

  renderActionsSecondary() {
    const { count, readonly } = this.props;

    if (readonly) {
      return null;
    }

    return (
      <div className={bem({ block, elem: 'actions-secondary' })}>
        <Numberpicker value={count} onChange={this.handleChange} />
      </div>
    );
  }

  renderActionsPrimary() {
    const { readonly } = this.props;

    if (readonly) {
      return null;
    }

    return (
      <div className={bem({ block, elem: 'actions-primary' })} onClick={this.handleClickRemove}>
        <Icon name="remove_shopping_cart" small />
      </div>
    );
  }

  renderInfo() {
    const { readonly, orderedQuantity, currency } = this.props;

    if (!readonly) {
      return null;
    }

    return (
      <div className={bem({ block, elem: 'info' })}>
        <Money value={orderedQuantity} currency={currency} />
      </div>
    );
  }

  renderAdditionalInfo() {
    const { count, orderedQuantity, productPrice, currency, readonly } = this.props;

    let summ;

    if (features.isPhone()) {
      return null;
    }

    if (!readonly) {
      summ = <Money value={orderedQuantity} currency={currency} />;
    }

    return (
      <div className={bem({ block, elem: 'text__secondary' })}>
        {count} x <Money value={productPrice} currency={currency} />
        {summ ? '= ' : ''}
        {summ}
      </div>
    );
  }

  render() {
    const { productName } = this.props;

    return (
      <div className={bem({ block, mods: this.getBemMods() })}>
        {this.renderImage()}
        <div className={bem({ block, elem: 'text' })}>
          <div className={bem({ block, elem: 'text__primary' })}>{productName}</div>
          {this.renderAdditionalInfo()}
        </div>
        {this.renderActionsSecondary()}
        {this.renderActionsPrimary()}
        {this.renderInfo()}
      </div>
    );
  }
}

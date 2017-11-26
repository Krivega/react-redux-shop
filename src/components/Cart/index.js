import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'cart';

export default class Cart extends React.Component {
  static propTypes = {
    openCart: PropTypes.bool,
    onClickClose: PropTypes.func
  };

  constructor(props) {
    super(props);

    const open = !!props.openCart;

    this.state = { open };
  }

  componentWillReceiveProps(props) {
    const { openCart } = props;

    if (openCart !== undefined) {
      if (openCart) {
        this.open();
      } else {
        this.close();
      }
    }
  }

  open() {
    if (this.state.open !== true) {
      this.setState({
        open: true,
        animating: true
      });
    }
  }

  close() {
    if (this.state.open !== false) {
      this.setState({
        open: false,
        animating: true
      });
    }
  }

  getBemMods() {
    let { open, animating } = this.state;

    return {
      open: !!open,
      animating: !!animating
    };
  }

  handleTransitionEnd = event => {
    const { open } = this.state;
    console.log('event.propertyName', event.propertyName);

    if (event.propertyName === 'transform' && event.currentTarget === event.target) {
      this.setState({ animating: false });
    }
  };

  render() {
    return (
      <div
        className={bem({ block, mods: this.getBemMods() })}
        onTransitionEnd={this.handleTransitionEnd}
      >
        <div className={bem({ block, elem: 'actions' })}>
          <Button stretch icon="close" onClick={this.props.onClickClose} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Button from 'components/Button';

import './style.css';

const block = 'overlay';

export default class Overlay extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    actions: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);

    const open = !!props.open;

    this.state = { open: open, animating: open };
  }

  componentWillReceiveProps(props) {
    const { open } = props;

    if (open !== undefined) {
      if (open) {
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

  handleTransitionEnd = event => {
    const { onClose } = this.props;
    const { open } = this.state;

    if (event.propertyName === 'transform' && event.currentTarget === event.target) {
      this.setState({ animating: false });

      if (open || onClose === undefined) {
        return;
      }

      onClose();
    }
  };

  handleClickBackdrop = event => {
    event.preventDefault();
    event.stopPropagation();

    this.close();
  };

  getBemMods() {
    let { open, animating } = this.state;

    return { open: !!open, animating: !!animating };
  }

  renderActions() {
    const { actions } = this.props;

    if (actions && actions.length !== 0) {
      return (
        <footer className={bem({ block, elem: 'footer' })}>
          {actions.map(this.renderActionItem)}
        </footer>
      );
    }
  }

  renderActionItem = (item, index) => {
    return (
      <div className={bem({ block, elem: 'footer__item' })} key={item.text + index}>
        <Button raised={item.primary} {...item}>
          {item.text}
        </Button>
      </div>
    );
  };

  renderHeader() {
    const { title } = this.props;

    if (title) {
      return (
        <header className={bem({ block, elem: 'header' })}>
          <h2 className={bem({ block, elem: 'header__title' })}>{title}</h2>
        </header>
      );
    }
  }

  render() {
    const { children } = this.props;

    return (
      <aside className={bem({ block, mods: this.getBemMods() })}>
        <div className={bem({ block, elem: 'surface' })} onTransitionEnd={this.handleTransitionEnd}>
          {this.renderHeader()}
          <section className={bem({ block, elem: 'content' })}>{children}</section>
          {this.renderActions()}
        </div>
        <div className={bem({ block, elem: 'backdrop' })} onClick={this.handleClickBackdrop} />
      </aside>
    );
  }
}

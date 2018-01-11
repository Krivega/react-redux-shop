import React from 'react';
import PropTypes from 'prop-types';
import features from 'features';
import { stringify as bem } from 'rebem-classname';
import { FormattedMessage } from 'react-intl';

import './style.css';

const block = 'slidable-helper';

export default class SlidableHelper extends React.PureComponent {
  static propTypes = {
    hidden: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      hidden: false
    };
  }

  componentWillReceiveProps(props) {
    const { hidden } = props;

    if (hidden !== undefined) {
      if (hidden === true) {
        clearTimeout(this.activeTimeout);
      }
      this.setState({ hidden });
    }
  }

  getBemMods() {
    const touch = features.isTouchDevice();

    return {
      hidden: this.state.hidden,
      active: this.state.active,
      touch: !!touch,
      notouch: !touch
    };
  }

  handleClick = () => {
    this.setState({ hidden: true });
  };

  render() {
    const touch = features.isTouchDevice();

    return (
      <div
        className={bem({ block, mods: this.getBemMods() })}
        onClick={touch ? this.handleClick : null}
      >
        <div className={bem({ block, elem: 'content', mods: { notouch: true } })}>
          <FormattedMessage id="scrollHelperText" />
        </div>
        <div className={bem({ block, elem: 'content', mods: { touch: true } })}>
          <FormattedMessage id="swipeHelperText" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.activeTimeout = setTimeout(() => this.setState({ active: true }));
  }

  componentWillUnmount() {
    clearTimeout(this.activeTimeout);
  }
}

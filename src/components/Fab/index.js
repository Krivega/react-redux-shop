import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Icon from 'components/Icon';
import Badge from 'components/Badge';

import './style.css';

const block = 'fab';

export default class Fab extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func
  };

  getBemMods() {
    return {
      disabled: !!this.props.disabled,
      exited: !!this.props.exited
    };
  }

  handleClick = event => {
    const { onClick, disabled } = this.props;

    if (onClick === undefined || disabled) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  renderBadge() {
    const { badge } = this.props;

    if (badge === undefined || badge === 0) {
      return;
    }

    return (
      <span className={bem({ block, elem: 'badge' })}>
        <Badge value={badge} stretch />
      </span>
    );
  }

  render() {
    const { icon, disabled } = this.props;

    return (
      <div className={bem({ block, mods: this.getBemMods() })} onClick={this.handleClick}>
        <button className={bem({ block, elem: 'inner' })} disabled={disabled}>
          <span className={bem({ block, elem: 'icon' })}>
            <Icon name={icon} />
          </span>
        </button>
        {this.renderBadge()}
      </div>
    );
  }
}

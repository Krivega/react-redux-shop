import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'button';

export default class Button extends React.Component {
  static propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    raised: PropTypes.bool,
    stretch: PropTypes.bool
  };

  getBemMods() {
    return {
      raised: !!this.props.raised,
      stretch: !!this.props.stretch
    };
  }

  handleClick = event => {
    const { onClick } = this.props;

    if (onClick === undefined) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick();
  };

  renderIcon() {
    const { icon, children } = this.props;

    if (!icon) {
      return null;
    }

    const mods = {
      'icon-only': !children
    };

    return (
      <span className={bem({ block, elem: 'icon', mods })}>
        <Icon small name={icon} />
      </span>
    );
  }
  render() {
    const { children, link } = this.props;

    return (
      <a className={bem({ block, mods: this.getBemMods() })} href={link} onClick={this.handleClick}>
        {this.renderIcon()}
        {children}
      </a>
    );
  }
}

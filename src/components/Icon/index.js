import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'icon';

export default class Fab extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    small: PropTypes.bool
  };

  getBemMods() {
    return {
      small: !!this.props.small
    };
  }

  render() {
    const { name } = this.props;

    return <i className={bem({ block, mods: this.getBemMods() })}>{name}</i>;
  }
}

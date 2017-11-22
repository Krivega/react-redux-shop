import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import './style.css';

const block = 'app-container';

export default class AppContainer extends React.PureComponent {
  static propTypes = {
    openCart: PropTypes.bool
  };

  getBemMods() {
    return {
      'aside-pushed': !!this.props.openCart
    };
  }
  render() {
    return <div className={bem({ block, mods: this.getBemMods() })}>{this.props.children}</div>;
  }
}

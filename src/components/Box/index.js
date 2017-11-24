import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'box';

export default class Box extends React.PureComponent {
  static propTypes = {
    contentEnd: PropTypes.bool,
    top1: PropTypes.bool
  };

  getBemMods() {
    return {
      top1: !!this.props.top1
    };
  }

  render() {
    const { children } = this.props;

    return <div className={bem({ block, mods: this.getBemMods() })}>{children}</div>;
  }
}

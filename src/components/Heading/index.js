import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'heading';

export default class Heading extends React.PureComponent {
  static propTypes = {
    title: PropTypes.bool,
    sub2: PropTypes.bool,
    indented: PropTypes.bool
  };

  getBemMods() {
    return {
      title: !!this.props.title,
      sub2: !!this.props.sub2,
      indented: !!this.props.indented,
      red: !!this.props.red
    };
  }

  render() {
    const { children } = this.props;

    return <div className={bem({ block, mods: this.getBemMods() })}>{children}</div>;
  }
}

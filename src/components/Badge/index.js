import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'badge';

export default class Badge extends React.PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stretch: PropTypes.bool
  };

  getBemMods = () => {
    return {
      stretch: !!this.props.stretch
    };
  };

  render() {
    const { value } = this.props;

    return <span className={bem({ block, mods: this.getBemMods() })}>{value}</span>;
  }
}

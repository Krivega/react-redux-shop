import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'image';

export default class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    responsive: PropTypes.bool,
    fit: PropTypes.bool,
    small: PropTypes.bool,
    circle: PropTypes.bool
  };

  getBemMods() {
    return {
      responsive: !!this.props.responsive,
      fit: !!this.props.fit,
      small: !!this.props.small,
      circle: !!this.props.circle
    };
  }

  render() {
    const { src, alt } = this.props;

    return <img className={bem({ block, mods: this.getBemMods() })} src={src} alt={alt} />;
  }
}

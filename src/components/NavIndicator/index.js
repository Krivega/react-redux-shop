import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'nav-indicator';

export default class NavIndicator extends React.Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    size: PropTypes.number
  };

  getStyle() {
    const { activeIndex, size } = this.props;
    const indicatorSize = 1 / size;
    let visibility;
    let translateX;
    let transform = '';

    if (activeIndex !== undefined) {
      const position = 100 * indicatorSize * activeIndex;

      translateX = `translateX(${position}%)`;
      visibility = 'visible';
      transform = translateX;
    }

    transform += ` scale(${indicatorSize}, 1)`;

    return {
      visibility,
      transform
    };
  }

  render() {
    const style = this.getStyle();

    return <div className={bem({ block })} style={style} />;
  }
}

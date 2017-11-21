import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import features from 'features';
import NavIndicator from 'components/NavIndicator';

import './style.css';

const block = 'nav';

export default class Nav extends React.Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    size: PropTypes.number
  };

  renderItem = Child => {
    return (
      <li className={bem({ block, elem: 'item' })} key={Child.key}>
        {React.cloneElement(Child)}
      </li>
    );
  };

  renderIndicator() {
    if (features.isMobile()) {
      return null;
    }

    const { size, activeIndex } = this.props;

    return <NavIndicator size={size} activeIndex={activeIndex} />;
  }

  render() {
    const { children } = this.props;

    return (
      <ul className={bem({ block })}>
        {React.Children.map(children, this.renderItem)}
        {this.renderIndicator()}
      </ul>
    );
  }
}

import React from 'react';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'scrollable-content';

export default class ScrollableContent extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <section className={bem({ block })}>{children}</section>;
  }
}

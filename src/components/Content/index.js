import React from 'react';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'content';

export default class Content extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className={bem({ block })}>
        <div className={bem({ block, elem: 'wrapper' })}>
          <div className={bem({ block, elem: 'body' })}>{children}</div>
        </div>
      </div>
    );
  }
}

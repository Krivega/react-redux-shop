import React from 'react';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'actions';

export default class Actions extends React.PureComponent {
  renderItem = Child => {
    return (
      <li className={bem({ block, elem: 'item' })} key={Child.key}>
        {Child}
      </li>
    );
  };

  render() {
    const { children } = this.props;

    return <ul className={bem({ block })}>{React.Children.map(children, this.renderItem)}</ul>;
  }
}

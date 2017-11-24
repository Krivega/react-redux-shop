import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import ListItem from 'components/ListItem';

import './style.css';

const block = 'list';

export default class List extends React.PureComponent {
  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onClickItem: PropTypes.func
  };

  renderItem = (item, index) => {
    return (
      <li className={bem({ block, elem: 'item' })} key={item.id}>
        <ListItem {...item} onClick={this.props.onClickItem} />
      </li>
    );
  };

  render() {
    const { items } = this.props;

    return <ul className={bem({ block })}>{items.map(this.renderItem)}</ul>;
  }
}

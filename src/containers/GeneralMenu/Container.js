import React from 'react';
import Nav from 'components/Nav';
import NavItem from 'components/NavItem';

export default class GeneralMenu extends React.PureComponent {
  renderItem = item => {
    return (
      <NavItem
        text={item.get('text')}
        icon={item.get('icon')}
        key={item.get('id')}
        link={item.get('link')}
        active={item.get('active')}
      />
    );
  };

  render() {
    let { items, activeIndex } = this.props;

    return (
      <Nav size={items.size} activeIndex={activeIndex}>
        {items.map(this.renderItem)}
      </Nav>
    );
  }
}

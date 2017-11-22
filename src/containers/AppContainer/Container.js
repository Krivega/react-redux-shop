import React from 'react';
import AppContainer from 'components/AppContainer';

export default class AppContainerConnected extends React.PureComponent {
  render() {
    const { children, openCart } = this.props;

    return <AppContainer openCart={openCart}>{children}</AppContainer>;
  }
}

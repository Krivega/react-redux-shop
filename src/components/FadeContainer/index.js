import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './style.css';

export default class FadeContainer extends React.PureComponent {
  static propTypes = {
    keyCode: PropTypes.string
  };

  render() {
    const { children, keyCode } = this.props;

    return (
      <TransitionGroup>
        <CSSTransition
          key={keyCode}
          timeout={500}
          classNames="fade-translate"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

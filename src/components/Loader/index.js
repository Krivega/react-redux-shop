import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'loader';

export default class Loader extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    fullscreen: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = { animating: !!props.active };
  }

  componentWillReceiveProps(props) {
    const { active } = props;

    if (active !== undefined) {
      this.setState({ animating: active });
    }
  }

  getBemMods() {
    return {
      active: !!this.props.active,
      fullscreen: !!this.props.fullscreen
    };
  }

  handleTransitionEnd = event => {
    if (event.propertyName === 'opacity' && event.currentTarget === event.target) {
      this.setState({ animating: false });
    }
  };

  renderBackdrop() {
    if (!this.props.fullscreen) {
      return null;
    }

    const { animating } = this.state;
    const mods = { active: !!this.props.active, animating };

    return (
      <div
        className={bem({ block, elem: 'backdrop', mods })}
        onTransitionEnd={this.handleTransitionEnd}
      />
    );
  }

  render() {
    return (
      <div>
        <div className={bem({ block, mods: this.getBemMods() })}>
          <div className={bem({ block, elem: 'bar', mods: { primary: true } })}>
            <div className={bem({ block, elem: 'bar__inner' })} />
          </div>
          <div className={bem({ block, elem: 'bar', mods: { secondary: true } })}>
            <div className={bem({ block, elem: 'bar__inner' })} />
          </div>
        </div>
        {this.renderBackdrop()}
      </div>
    );
  }
}

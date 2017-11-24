import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'list-item';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func
  };

  handleClick = event => {
    const { onClick, id } = this.props;

    if (onClick === undefined) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    onClick(id);
  };

  getBemMods() {
    return {
      interactive: !!this.props.onClick
    };
  }

  renderInfo() {
    const { info } = this.props;

    if (info) {
      return <div className={bem({ block, elem: 'info' })}>{info}</div>;
    }
  }

  render() {
    const { text } = this.props;

    return (
      <div className={bem({ block, mods: this.getBemMods() })} onClick={this.handleClick}>
        <div className={bem({ block, elem: 'text' })}>{text}</div>
        {this.renderInfo()}
      </div>
    );
  }
}

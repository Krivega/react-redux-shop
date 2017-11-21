import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'field';

export default class Field extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      value: value !== undefined ? value : '',
      valid: true
    };
  }

  componentWillReceiveProps(props) {
    const value = props.value;

    if (value !== undefined) {
      this.setState({
        value
      });
    }
  }

  getBemMods() {
    return {
      flat: !!this.props.flat,
      disabled: !!this.props.disabled,
      focused: !!this.state.focused,
      invalid: !this.state.valid
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const { onChange } = this.props;

    this.setState({
      value,
      valid: event.target.checkValidity()
    });

    if (onChange === undefined) {
      return;
    }

    onChange(value);
  };

  handleFocus = event => {
    this.setState({
      focused: true,
      bottomLineActive: true
    });
  };

  handleBlur = event => {
    this.setState({
      focused: false,
      valid: event.target.checkValidity()
    });
  };

  handleMouseDown = event => {
    const targetClientRect = event.target.getBoundingClientRect();
    const bottomLineTransformX = event.clientX - targetClientRect.left;

    this.setState({
      bottomLineTransformX
    });
  };

  handleTransitionEnd = event => {
    if (event.propertyName === 'opacity' && !this.state.focused) {
      this.setState({
        bottomLineActive: false
      });
    }
  };

  renderLabel() {
    const { id, label } = this.props;
    const { focused, value } = this.state;
    const mods = {
      float: !!(focused || value)
    };

    if (label !== undefined) {
      return (
        <label className={bem({ block, elem: 'label', mods })} htmlFor={id}>
          {label}
        </label>
      );
    }
  }

  renderHelptext() {
    const { helpText } = this.props;

    if (helpText !== undefined) {
      return <div className={bem({ block, elem: 'helptext' })}>{helpText}</div>;
    }
  }

  renderBottomLine() {
    const { bottomLineTransformX, bottomLineActive } = this.state;
    const style = {
      transformOrigin: `${bottomLineTransformX}px center`
    };
    const mods = {
      active: !!bottomLineActive
    };

    return (
      <div
        className={bem({ block, elem: 'bottom-line', mods })}
        style={style}
        onTransitionEnd={this.handleTransitionEnd}
      />
    );
  }

  render() {
    const { type, min, max, step, readOnly, disabled, id, required } = this.props;
    const { value } = this.state;
    let pattern;
    const inputProps = { type, min, max, step, value, readOnly, disabled, id, required };

    if (type === 'tel') {
      // fix for igore optimizing of prettier
      pattern = '(\\';
      pattern += '+?\\';
      pattern += 'd[- .]*){7,13}';
    }

    return (
      <div>
        <div className={bem({ block, mods: this.getBemMods() })}>
          <input
            className={bem({ block, elem: 'input' })}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleMouseDown}
            pattern={pattern}
            {...inputProps}
          />
          {this.renderLabel()}
          {this.renderBottomLine()}
          {this.props.children}
        </div>
        {this.renderHelptext()}
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';
import Icon from 'components/Icon';
import Field from 'components/Field';

import './style.css';

const block = 'numberpicker';

export default class Numberpicker extends React.Component {
  static defaultProps = {
    min: 0,
    max: 999,
    step: 1,
    value: 0
  };

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const { value } = props;

    this.state = {
      value: value !== undefined ? value : ''
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

  handleChange = event => {
    const value = event.target.value;

    this.setState({
      value
    });

    this.props.onChange(value);
  };

  handleClickReduce = event => {
    const { min, step } = this.props;
    let { value } = this.state;

    value -= step;

    if (value < min) {
      value = min;
    }

    this.setState({
      value
    });

    this.props.onChange(value);
  };

  handleClickIncrease = event => {
    const { max, step } = this.props;
    let { value } = this.state;

    value += step;

    if (value > max) {
      value = max;
    }

    this.setState({
      value
    });

    this.props.onChange(value);
  };

  render() {
    const { min, max, step } = this.props;
    const { value } = this.state;
    const props = { min, max, step, value, readOnly: true, flat: true };

    return (
      <div className={bem({ block })}>
        <div className={bem({ block, elem: 'action' })} onClick={this.handleClickReduce}>
          <Icon name="remove" small />
        </div>
        <Field onChange={this.handleChange} {...props} />
        <div className={bem({ block, elem: 'action' })} onClick={this.handleClickIncrease}>
          <Icon name="add" small />
        </div>
      </div>
    );
  }
}

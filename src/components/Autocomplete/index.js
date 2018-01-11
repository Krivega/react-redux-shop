import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/Field';
import Loader from 'components/Loader';
import List from 'components/List';

export default class Autocomplete extends React.PureComponent {
  static defaultProps = {
    list: []
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    labelToken: PropTypes.string,
    helpTextToken: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  handleChangeCity = value => {
    this.props.onChange(value);
  };

  handleClickItem = id => {
    this.props.onSelect(id);
  };

  renderList() {
    const { list } = this.props;

    if (list.length > 0) {
      return <List items={list} onClickItem={this.handleClickItem} />;
    }
  }

  render() {
    const { value, loading, helpTextToken, id, labelToken } = this.props;

    return (
      <div>
        <Field
          labelToken={labelToken}
          id={id}
          type="text"
          helpTextToken={helpTextToken}
          required
          value={value}
          onChange={this.handleChangeCity}
        >
          <Loader active={loading} />
        </Field>
        {this.renderList()}
      </div>
    );
  }
}

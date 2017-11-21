import React from 'react';
import PropTypes from 'prop-types';
import Field from 'components/Field';
import Loader from 'components/Loader';
import List from 'components/List';

export default class Autocomplete extends React.Component {
  static defaultProps = {
    list: []
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    helpText: PropTypes.string,
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
    const { value, loading, helpText, id, label } = this.props;

    return (
      <div>
        <Field
          label={label}
          id={id}
          type="text"
          helpText={helpText}
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

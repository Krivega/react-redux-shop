import React from 'react';
import Autocomplete from 'components/Autocomplete';

export default class Delivery extends React.PureComponent {
  render() {
    const { listCities, selectedCityName, requestedListCities } = this.props;

    return (
      <Autocomplete
        id="deliveryCity"
        label="City"
        helpText="start typing for search ..."
        list={listCities.toJS()}
        value={selectedCityName}
        loading={requestedListCities}
        onChange={this.props.onChangeCityName}
        onSelect={this.props.onSelectCity}
      />
    );
  }
}

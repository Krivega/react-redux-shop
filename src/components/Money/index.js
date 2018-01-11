import React from 'react';
import PropTypes from 'prop-types';
import { stringify as bem } from 'rebem-classname';

import './style.css';

const block = 'money';

export default class Money extends React.PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string
  };

  renderCurrency() {
    const { currency } = this.props;

    if (currency === undefined) {
      return null;
    }

    return <div className={bem({ block, elem: 'currency' })}>{currency}</div>;
  }

  /**
   * Format any number
   * @param number - Number
   * @param fractionalDigits - fractional digits
   * @param decimalMark
   * @param thousandsSeparator - thousands separator
   * @returns {string}
   */
  formatNumber(number, fractionalDigits, decimalMark, thousandsSeparator) {
    let sign;
    let numberString;
    let thousandsPrefix;

    if (isNaN(Math.abs(fractionalDigits))) {
      fractionalDigits = 0;
    }

    decimalMark = decimalMark === undefined ? '.' : decimalMark;
    thousandsSeparator = thousandsSeparator === undefined ? ' ' : thousandsSeparator;
    sign = number < 0 ? '-' : '';
    number = Math.abs(+number || 0);
    numberString = parseInt(number.toFixed(fractionalDigits), 10) + '';
    thousandsPrefix = numberString.length > 3 ? numberString.length % 3 : 0;

    return (
      sign +
      (thousandsPrefix ? numberString.substr(0, thousandsPrefix) + thousandsSeparator : '') +
      numberString.substr(thousandsPrefix).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) +
      (fractionalDigits
        ? decimalMark +
          Math.abs(number - numberString)
            .toFixed(fractionalDigits)
            .slice(2)
        : '')
    );
  }

  formatDollars(value) {
    return this.formatNumber(value, 0, '.', ',');
  }

  render() {
    const { value } = this.props;

    return (
      <div className={bem({ block })}>
        {this.renderCurrency()}
        {this.formatDollars(value)}
      </div>
    );
  }
}

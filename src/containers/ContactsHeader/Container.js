import React from 'react';
import Heading from 'components/Heading';

export default class ContactsHeader extends React.PureComponent {
  render() {
    const { phoneNumber } = this.props;

    return <Heading sub2>{phoneNumber}</Heading>;
  }
}

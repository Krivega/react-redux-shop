import React from 'react';
import Content from 'components/Content';
import List from 'components/List';
import Heading from 'components/Heading';
import { FormattedMessage } from 'react-intl';

export default class ContactsInfo extends React.PureComponent {
  render() {
    const { titleToken, phoneNumber, email } = this.props;
    const items = [{ text: phoneNumber, id: phoneNumber }, { text: email, id: email }];

    return (
      <Content>
        <Heading title indented>
          <FormattedMessage id={titleToken} />
        </Heading>
        <List items={items} />
      </Content>
    );
  }
}

import React from 'react';
import Content from 'components/Content';
import List from 'components/List';
import Heading from 'components/Heading';

export default class ContactsInfo extends React.PureComponent {
  render() {
    const { phoneNumber, email } = this.props;
    const items = [{ text: phoneNumber, id: phoneNumber }, { text: email, id: email }];

    return (
      <Content>
        <Heading title indented>
          This demo content is created to demonstrate the skills of development
        </Heading>
        <List items={items} />
      </Content>
    );
  }
}

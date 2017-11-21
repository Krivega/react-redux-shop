import React from 'react';
import Content from 'components/Content';
import Heading from 'components/Heading';

export default class DeliveryInfo extends React.PureComponent {
  render() {
    let { info } = this.props;

    return (
      <Content>
        <Heading title indented>
          This demo content is created to demonstrate the skills of development
        </Heading>
        {info}
      </Content>
    );
  }
}

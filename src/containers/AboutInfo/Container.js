import React from 'react';
import Content from 'components/Content';
import Heading from 'components/Heading';
import { FormattedMessage } from 'react-intl';

export default class AboutInfo extends React.PureComponent {
  render() {
    let { titleToken, descriptionToken } = this.props;

    return (
      <Content>
        <Heading title indented>
          <FormattedMessage id={titleToken} />
        </Heading>
        <FormattedMessage id={descriptionToken} />
      </Content>
    );
  }
}

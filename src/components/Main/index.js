import React from 'react';
import Content from 'containers/Content';

import './style.css';

export default class Main extends React.PureComponent {
  render() {
    return (
      <main className="main">
        <Content />
      </main>
    );
  }
}

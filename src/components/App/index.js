import React from 'react';
import { stringify as bem } from 'rebem-classname';
import features from 'features';
import ProgressiveImage from 'components/ProgressiveImage';
import Header from 'components/Header';
import Main from 'components/Main';
import Cart from 'containers/Cart';
import Order from 'containers/Order';
import AppContainer from 'containers/AppContainer';

import './style.css';

import bgPlaceholder from './bg-placeholder.jpg';
import bgSmall from './bg-small.jpg';
import bgMiddle from './bg-middle.jpg';
import bgBig from './bg-big.jpg';

const block = 'app';

export default class App extends React.PureComponent {
  renderBg() {
    let bg = bgBig;

    if (features.isPhone()) {
      bg = bgSmall;
    } else if (features.isTablet()) {
      bg = bgMiddle;
    }

    return (
      <div className={bem({ block, elem: 'bg' })}>
        <ProgressiveImage src={bg} placeholder={bgPlaceholder} fit />
      </div>
    );
  }

  render() {
    return (
      <div className={bem({ block })}>
        <AppContainer>
          <Header />
          <div className={bem({ block, elem: 'body' })}>
            <Main />
          </div>
          {this.renderBg()}
        </AppContainer>
        <Cart />
        <Order />
      </div>
    );
  }
}

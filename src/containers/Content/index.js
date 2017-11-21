import React from 'react';
import { connect } from 'react-redux';
import SellingProductsList from 'containers/SellingProductsList';
import AboutInfo from 'containers/AboutInfo';
import DeliveryInfo from 'containers/DeliveryInfo';
import ContactsInfo from 'containers/ContactsInfo';
import NotFoundInfo from 'containers/NotFoundInfo';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Routes = ({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.pathname.split('/')[1]}
      timeout={500}
      classNames="fadeTranslate"
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Switch location={location}>
        <Route exact path="/" component={SellingProductsList} />
        <Route path="/about" component={AboutInfo} />
        <Route path="/delivery" component={DeliveryInfo} />
        <Route path="/contacts" component={ContactsInfo} />
        <Route path="**" component={NotFoundInfo} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

const Content = connect(state => {
  return {
    location: state.get('router').get('location')
  };
})(Routes);

export default Content;

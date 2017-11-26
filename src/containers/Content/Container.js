import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FadeContainer from 'components/FadeContainer';
import SellingProductsList from 'containers/SellingProductsList';
import AboutInfo from 'containers/AboutInfo';
import DeliveryInfo from 'containers/DeliveryInfo';
import ContactsInfo from 'containers/ContactsInfo';
import NotFoundInfo from 'containers/NotFoundInfo';

export default function Routes({ location }) {
  return (
    <FadeContainer keyCode={location.pathname.split('/')[1]}>
      <Switch location={location}>
        <Route exact path="/" component={SellingProductsList} />
        <Route path="/about" component={AboutInfo} />
        <Route path="/delivery" component={DeliveryInfo} />
        <Route path="/contacts" component={ContactsInfo} />
        <Route path="**" component={NotFoundInfo} />
      </Switch>
    </FadeContainer>
  );
}

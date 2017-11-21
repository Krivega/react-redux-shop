import { connect } from 'react-redux';
import Container from './Container';
import { closeOrder, send } from 'containers/OrderInfo/actions';

import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => {
      dispatch(closeOrder());
    },
    onCheckout: () => {
      dispatch(send());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

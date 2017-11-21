import { connect } from 'react-redux';
import CartIndicator from 'components/CartIndicator';
import { toggleCart } from 'containers/Cart/actions';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(toggleCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator);

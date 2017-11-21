import { connect } from 'react-redux';
import Container from './Container';
import { addToCart } from 'containers/Cart/actions';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClickBuy: productId => {
      dispatch(addToCart(productId, 1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

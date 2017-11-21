import { connect } from 'react-redux';
import { removeFromCart, changeItemCountCart, toggleCart } from './actions';
import { openOrder } from 'containers/OrderInfo/actions';
import selector from './selectors';
import Container from './Container';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClickClose: () => {
      dispatch(toggleCart());
    },
    onClickRemove: productId => {
      dispatch(removeFromCart(productId));
    },
    onChangeItemCount: (productId, value) => {
      dispatch(changeItemCountCart(productId, value));
    },
    onClickOrder: () => {
      dispatch(openOrder());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

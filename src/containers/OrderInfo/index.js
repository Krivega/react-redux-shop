import { connect } from 'react-redux';
import Container from './Container';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

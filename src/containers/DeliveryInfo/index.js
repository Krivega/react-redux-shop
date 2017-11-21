import { connect } from 'react-redux';
import selector from './selectors';
import Container from './Container';

const mapStateToProps = state => selector(state);

export default connect(mapStateToProps)(Container);

import { connect } from 'react-redux';
import Container from './Container';
import selector from './selectors';

const mapStateToProps = state => selector(state);

export default connect(mapStateToProps)(Container);

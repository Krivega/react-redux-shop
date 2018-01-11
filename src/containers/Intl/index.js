import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import selector from './selectors';

const mapStateToProps = state => selector(state);

export default connect(mapStateToProps, null, null, { pure: false })(IntlProvider);

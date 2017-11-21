import { connect } from 'react-redux';
import Container from './Container';
import { changeStreet, changePhone, changeEmail, changeName } from './actions';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onChangeStreet: query => {
      dispatch(changeStreet(query));
    },
    onChangeName: query => {
      dispatch(changeName(query));
    },
    onChangePhone: query => {
      dispatch(changePhone(query));
    },
    onChangeEmail: query => {
      dispatch(changeEmail(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

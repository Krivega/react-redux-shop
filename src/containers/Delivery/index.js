import { connect } from 'react-redux';
import Container from './Container';
import { getListCities, selectCity } from './actions';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onChangeCityName: query => {
      dispatch(getListCities(query));
    },
    onSelectCity: id => {
      dispatch(selectCity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

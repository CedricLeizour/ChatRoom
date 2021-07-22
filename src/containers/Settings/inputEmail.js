import { connect } from 'react-redux';
import InputEmail from 'src/components/Settings/inputEmail';
import { setEmailValue } from '../../actions';

const mapStateToProps = (state) => ({
  value: state.settings.email,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailValue: (value) => dispatch(setEmailValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputEmail);

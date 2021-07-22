import { connect } from 'react-redux';
import InputPassword from 'src/components/Settings/inputPassword';
import { setPasswordValue } from '../../actions';
const mapStateToProps = (state) => ({
  value: state.settings.password,
});
const mapDispatchToProps = (dispatch) => ({
  setPasswordValue: (value) => dispatch(setPasswordValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPassword);

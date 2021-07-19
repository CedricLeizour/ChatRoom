import { connect } from 'react-redux';
import { setMessageValue } from 'src/actions';
import Form from 'src/components/Form';
import { sendNewMessage } from '../../actions';

const mapStateToProps = (state) => ({
  inputValue: state.currentMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setMessageValue: (inputValue) => dispatch(setMessageValue(inputValue)),
  sendNewMessage: () => dispatch(sendNewMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

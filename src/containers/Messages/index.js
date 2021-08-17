import { connect } from 'react-redux';
import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
  pseudo: state.pseudo,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

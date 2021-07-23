import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings } from '../../actions';

const mapStateToProps = (state) => ({
  open: state.settings.open,
});
const mapDispatchToProps = (dispatch) => ({
  openToggle: () => dispatch(toggleSettings()),
  onLogin: () => { },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user,
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
})

export default withRouter(connect(
  mapStateToProps,
  mdp
)(NavBar));
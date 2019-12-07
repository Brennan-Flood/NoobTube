import MainPage from './main_page';
import {connect} from 'react-redux';

const msp = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated
  }
}

export default connect(msp)(MainPage);
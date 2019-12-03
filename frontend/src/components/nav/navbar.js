import React from 'react';
import { Link } from 'react-router-dom'
import AutoCompleteContainer from "../search/auto_complete_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nav: false}
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.userIconColor = this.userIconColor.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.setState({nav: false})
  }

  demoLogin(e) {
    e.preventDefault();
    let demoUser = {email: 'guest@guest.com', password: 'password'};
    this.props.login(demoUser);
  }

  getCurrentUser() {
    if ( this.props.user && this.props.user.handle ) {
    return this.props.user.handle.slice(0, 1).toUpperCase();
    } else {
      return <p></p>
    }
  }

  userIconColor() {
    if ('abc'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(41, 179, 179)';
    } else if ('defg'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(216, 205, 44)';
    } else if ('hijk'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(221, 55, 77)';
    } else if ('lmnop'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(199, 103, 58)'
    } else if ('qrstu'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(20, 230, 125)';
    } else if ('vwxyz'.includes(this.props.user.handle.slice(0, 1).toLowerCase())) {
      return 'rgb(141, 24, 196)';
    }
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav">
          <div className="nav-buttons">
          <button className="logout-button" onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login-div">
          <Link to={'/signup'}><button className="signup">Create an Account</button></Link>
          <Link to={'/login'}><button className="login">Login</button></Link>
          <button className="demo-login" onClick={this.demoLogin}>Login as Demo User</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header-div">
        <div className="logo-div">
          <Link to='/videos'><h1 className="logo">NoobTube</h1></Link>
          <AutoCompleteContainer />
          <Link to={'/profile'}>
          { this.props.loggedIn ? <h1 className="comment-icon" style={{background: this.userIconColor()}} >{this.getCurrentUser()}</h1> : <div></div>}
          </Link>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
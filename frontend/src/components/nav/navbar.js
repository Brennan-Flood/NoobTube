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
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getCurrentUser() {
    if ( this.props.user && this.props.user.handle ) {
    return this.props.user.handle.slice(0, 1).toUpperCase();
    } else {
      return <p></p>
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
          <Link to={'/signup'}><button className="signup">Signup</button></Link>
          <Link to={'/login'}><button className="login">Login</button></Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.state)
    return (
      <div className="header-div">
        <div className="logo-div">
          <Link to='/videos'><h1 className="logo">NoobTube</h1></Link>
          <AutoCompleteContainer />
          <Link to={'/profile'}>
          <h1 className="current-user" >{this.getCurrentUser()}</h1>
          </Link>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default NavBar;
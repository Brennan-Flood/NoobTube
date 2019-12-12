
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/videos');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="auth-modal">
        <form className="auth-form" onSubmit={this.handleSubmit}>
            <h1 className="auth-header">Login</h1>

            <input className="email-input" type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <input className="password-input" type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <input className="auth-submit" type="submit" value="Log in!" />
            <Link to="/signup"><button className="create-account">Create an account!</button></Link>
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
import React from 'react';
import { Redirect } from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to="/login" />
    }
    
    return (
      <div>
        <footer className="footer">
          Copyright &copy; 2019 NoobTube
        </footer>
      </div>
    );
  }
}

export default MainPage;
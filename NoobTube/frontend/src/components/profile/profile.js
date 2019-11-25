import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    console.log(this.props.currentUser.id)
  }

  componentWillReceiveProps(newState) {
  }

  render() {
      return (<div></div>)
    
    
  }
}

export default Profile;
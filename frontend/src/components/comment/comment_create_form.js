import React from 'react';
// import CommentIndex from './comment_index';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      newComment: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {
      text: this.state.text,
      user: this.props.currentUser.id,
      video: this.props.videoId
    };

    // debugger; 

    this.props.createComment(comment);
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
      <div> 
        <form onSubmit={this.handleSubmit}>
          <div> 
            <textarea
              value={this.state.text}
              onChange={this.update()}
              placeholder="Comment..."
            />
            <input type="submit" value="Comment" />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateComment; 
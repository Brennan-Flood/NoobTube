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
      <div className="comment-create-section" > 
        <form className="comment-create-form" onSubmit={this.handleSubmit}>
            <textarea
              className="comment-text-area"
              value={this.state.text}
              onChange={this.update()}
              placeholder="Comment..."
            />
            <input
            className="comment-submit"
            type="submit" 
            value="Comment" 
            />
        </form>
      </div>
    )
  }
}

export default CreateComment; 
import React from 'react';

class CommentIndexItem extends React.Component {
  render() {
    return (
      <li>
        <h1>{this.props.comment.text}</h1>
        <h1>{this.props.comment.user.handle}</h1>
      </li>
    )
  }
}

export default CommentIndexItem;
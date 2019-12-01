import React from 'react';

class CommentIndexItem extends React.Component {
  render() {
    console.log(this.props.comment)
    return (
      <li className="comment">
        <h1 className="comment-author">{this.props.comment.user.handle}</h1>
        <h1 className="comment-body">{this.props.comment.text}</h1>
      </li>
    )
  }
}

export default CommentIndexItem;
import React from 'react';
import CreateCommentContainer from './comment_create_container';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {videoId: this.props.videoId};
    this.getCurrentVideoId = this.getCurrentVideoId.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId);
    this.getCurrentVideoId();
  }

  getCurrentVideoId() {
    let urlArr = window.location.href.split('/');
    return urlArr[urlArr.length - 1];
  }

  componentDidUpdate() {
    if (this.getCurrentVideoId() !== this.state.videoId ) {
      this.props.fetchComments(this.props.videoId);
      this.setState({videoId: this.getCurrentVideoId()});
    }
  }

  render() {
    return (
      <div className="comments-container">
      <h1 className="video-comments-header">{Object.values(this.props.comments).length} Comments</h1>
        <CreateCommentContainer videoId={this.props.videoId} />
        <ul>
        {Object.values(this.props.comments).map((comment, i) => {
          return <CommentIndexItem key={i} comment={comment}/>
        })}
        </ul>
      </div>
    )
  }
}
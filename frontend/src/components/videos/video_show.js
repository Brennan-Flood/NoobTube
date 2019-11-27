import React from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';

export default class VideoShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
    if (this.props.videos[this.props.videoId] === undefined) {
      this.props.fetchVideos();
    }
  }

  render() {
    if (this.props.video) {
    return (
      <div className="video">
        <div className="video-show">
          <ReactPlayer
            // poster="/assets/poster.png"
              url={this.props.videos[this.props.videoId].link}
              height={520}
              width={890}
          />
          <div className="video-show-header">
              <h1 className="video-show-title">{this.props.videos[this.props.videoId].title}</h1>
              <h1 className="video-show-author">{this.props.videos[this.props.videoId].author}</h1>
          </div>

          <div className="video-comments">
            <h1 className="video-comments-header">Comments</h1>
            <CommentIndexContainer videoId={this.props.videoId}/>
          </div>
        </div>
        <ul className="suggested-videos">
          <h1 className="suggested-video-header">Up Next</h1>
          {Object.values(this.props.videos).map((video) => {
            return(
              
                <li className="suggested-video">
                  <Link to={`/video/${video._id}`}>
                    <h1 className="suggested-video-title">{video.title}</h1>
                  </Link>
                  <h1 className="suggested-video-author">{video.author}</h1>
                </li>
              
            )
          })}
        </ul>
      </div>
    );
    } else {
      return <div>this is not working</div>
    }
  }
};
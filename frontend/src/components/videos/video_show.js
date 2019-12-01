import React from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comment/comment_index_container';
import LikesShowContainer from '../like/likes_show_container';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { voted: false };
    this.deleteLike = this.deleteLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentDidUpdate() {
    if (this.props.videos[this.props.videoId] === undefined) {
      this.props.fetchVideos();
    }
  }

  handleLike() {
    let like = {
      userId: this.props.user.id,
      videoId: this.props.videoId,
      liked: true
    }

    this.props.createLike(like);
    this.setState( { voted: true } )
  }

  handleDislike() {
    let like = {
      userId: this.props.user.id,
      videoId: this.props.videoId,
      liked: false
    };
    this.props.createLike(like);
    this.setState({voted: true})
  }

  deleteLike() {
    this.props.deleteLike(this.props.videoId, this.props.user._id);
  }

  render() {
    let buttons;
    if (!this.state.voted) {
      buttons = <div className="like-buttons">
        <button className="like" onClick={this.handleLike}><img className="thumbs-up" src="thumbsup.png" /></button>
        {/* <i className="fas fa-thumbs-up"></i> */}
        <button className="dislike" onClick={this.handleDislike}><img className="thumbs-down" src="thumbsdown.png"/></button>
        {/* <i className="fas fa-thumbs-down"></i> */}
        <LikesShowContainer />
      </div>
    } else {
      buttons = <div className="like-buttons">
        <button className="like" onClick={this.deleteLike}><i class="fas fa-thumbs-up"></i></button>
        <button className="dislike" onClick={this.deleteLike}><img className="thumbs-down" src="thumbsdown.png" /></button>
        <LikesShowContainer />
      </div>
    }

    if (this.props.video) {
    return (
      <div className="video-div">
        <div className="video-show">
          <ReactPlayer
              className="video"
              url={this.props.videos[this.props.videoId].link}
              controls="true"
              volume="0.5"
          />
          {buttons}
          <div className="video-show-header">
              <h1 className="video-show-title">{this.props.videos[this.props.videoId].title}</h1>
              <h1 className="video-show-author">{this.props.videos[this.props.videoId].author}</h1>
          </div>

          <div className="video-comments">
            <CommentIndexContainer videoId={this.props.videoId}/>
          </div>
        </div>
        <ul className="suggested-videos">
          <h1 className="suggested-video-header">Up Next</h1>
          {Object.values(this.props.videos).map((video) => {
            let thumbnailUrl = "https://img.youtube.com/vi/";
            let splitUrl = video.link.split("=");
            if (splitUrl.length === 1) {
              thumbnailUrl = "stock_thumbnail.jpg";
            } else {
              thumbnailUrl = thumbnailUrl.concat(splitUrl.slice(1)).concat("/0.jpg");
            }
           
            return(  
                <li className="suggested-video">
                  <Link to={`/video/${video._id}`}>
                    <h1 className="suggested-video-title">{video.title}</h1>
                  </Link>
                  <h1 className="suggested-video-author">{video.author}</h1>
                <img className="suggested-video-thumbnail" src={thumbnailUrl} alt="stock_thumbnail.jpg"/>
                </li>
              
            )
          })}
        </ul>
      </div>
    );
    } else {
      return <div className="loading">this is not working</div>
    }
  }
};
import React from 'react';
import UIfx from 'uifx';
import Hitmarkers from '../../audio/hitmarker_2.mp3';

class LikesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoId: null}
    this.getCurrentVideoId = this.getCurrentVideoId.bind(this);
    this.likeRatio = this.likeRatio.bind(this);
  }

  getCurrentVideoId() {
    let urlArr = window.location.href.split('/');
    return urlArr[urlArr.length - 1];
  }

  componentDidMount() {
    this.props.fetchLikes(this.getCurrentVideoId());
  }

  componentDidUpdate() {

    if (this.state.videoId !== this.getCurrentVideoId()) {
      this.props.fetchLikes(this.getCurrentVideoId());
      this.setState({videoId: this.getCurrentVideoId()});
    }
  }

  likeRatio() {
    return `${this.props.likes / (this.props.likes + this.props.dislikes) * 100}%`
  }
  
  render() {
    
    return (
      <div className="likes-container">
        <div className = "like-ratio-bar" >
          <div className="likes-bar" style={{ width: this.likeRatio() }}></div>
        </div >
        <div className="likes-counter">
        <p className="likes-count">{this.props.likes} Likes</p>
        <p className="dislikes-count">{this.props.dislikes} Dislikes</p>
        </div>
      </div>
    )
  }

}

export default LikesShow;
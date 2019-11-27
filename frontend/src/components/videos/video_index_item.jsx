import React from "react";
import { Link } from "react-router-dom";

export default class VideoIndexItem extends React.Component {

  render() {
    return (
      <div>
        <Link to={`/video/${this.props.video._id}`} ><div className="video-item">
          <h2>{this.props.video.title}</h2>
          <img className="index-thumbnail" src="" alt=""/>
          <p>{this.props.video.author}</p>
        </div></Link>
        <button onClick={() => this.props.destroyVideo(this.props.video._id)}>Delete</button>
      </div>
    )
  }
}
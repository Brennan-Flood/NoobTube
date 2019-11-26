import React from "react";
import { Link } from "react-router-dom";

export default class VideoIndexItem extends React.Component {

  render() {
    return (
      <Link to={`/video/${this.props.video._id}`} ><div className="video-item">
        <h2>{this.props.video.title}</h2>
        <h3>thumbnail placeholder</h3>
        <p>{this.props.video.author}</p>
      </div></Link>
    )
  }
}
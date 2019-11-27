import React from "react";
import { Link } from "react-router-dom";

export default class VideoIndexItem extends React.Component {

  render() {
    let thumbnailUrl = "https://img.youtube.com/vi/";
    let splitUrl = this.props.video.link.split("=");
    if (splitUrl.length === 1) {
      thumbnailUrl = "stock_thumbnail.jpg";
    } else {
      thumbnailUrl = thumbnailUrl.concat(splitUrl.slice(1)).concat("/0.jpg");
    }
    // https://youtu.be/sjjAWzZXCxk
    
    return (
      <div>
        <Link to={`/video/${this.props.video._id}`} ><div className="video-item">
          <h2>{this.props.video.title}</h2>
          <img className="index-thumbnail" src={thumbnailUrl} alt="stock_thumbnail.jpg"/>
          <p>{this.props.video.author}</p>
        </div></Link>
        <button onClick={() => this.props.destroyVideo(this.props.video._id)}>Delete</button>
      </div>
    )
  }
}
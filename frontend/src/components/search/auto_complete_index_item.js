import React from "react";
import { Link } from "react-router-dom";

export default class ACIndexItem extends React.Component {

  render() {
    if (true) {
    let thumbnailUrl = "https://img.youtube.com/vi/";
    let splitUrl = this.props.video.link.split("=");
    if (splitUrl.length === 1) {
      thumbnailUrl = "stock_thumbnail.jpg";
    } else {
      thumbnailUrl = thumbnailUrl.concat(splitUrl.slice(1)).concat("/0.jpg");
    }
      let title;
      this.props.video.title.length > 45 ? title = this.props.video.title.slice(0, 45) + '...' : title = this.props.video.title
    return (
      <Link className="search-index-item" to={`/video/${this.props.video._id}`} ><div className="search-result-item">
        <div className="search-detail">
          <h2 className="video-search-title" >{title}</h2>
          <p className="video-search-author">{this.props.video.author}</p>
        </div>
        <div className = "search-thumbnail-div">
          <img className="search-thumbnail" src={thumbnailUrl} alt="stock_thumbnail.jpg"/>
        </div>
      </div></Link>
    )
  } else {
    return <div></div>
  }
  }
}
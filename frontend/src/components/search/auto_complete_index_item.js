import React from "react";
import { Link } from "react-router-dom";

export default class ACIndexItem extends React.Component {

  render() {
    let thumbnailUrl = "https://img.youtube.com/vi/";
    let splitUrl = this.props.video.link.split("=");
    if (splitUrl.length === 1) {
      thumbnailUrl = "stock_thumbnail.jpg";
    } else {
      thumbnailUrl = thumbnailUrl.concat(splitUrl.slice(1)).concat("/0.jpg");
    }
    
    return (
      <Link className="search-index-item" to={`/video/${this.props.video._id}`} ><div className="search-result-item">
        <div className="search-detail">
          <h2>{this.props.video.title}</h2>
          <p>{this.props.video.author}</p>
        </div>
        <div className = "search-thumbnail-div">
          <img className="search-thumbnail" src={thumbnailUrl} alt="stock_thumbnail.jpg"/>
        </div>
      </div></Link>
    )
  }
}
import React from "react";
import { Link } from "react-router-dom";

export default class ACIndexItem extends React.Component {

  render() {
    return (
      <Link className="search-index-item" to={`/video/${this.props.video._id}`} ><div className="search-result-item">
        <div className="search-detail">
          <h2>{this.props.video.title}</h2>
          <p>{this.props.video.author}</p>
        </div>
        <div className = "search-thumbnail-div">
          <img className="search-thumbnail" src="" alt=""/>
        </div>
      </div></Link>
    )
  }
}
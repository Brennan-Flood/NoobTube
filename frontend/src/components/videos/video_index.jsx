import React from "react";
// import { Link } from "react-router-dom";
import VideoIndexItem from "./video_index_item";

export default class VideoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div className="videos-div">
        <ul className="videos-ul">
          {this.props.videos.map(video => {
            return <VideoIndexItem key={video._id} video={video}/>
          })}
        </ul>
      </div>
    )
  }
}
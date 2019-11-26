import React from "react";
import { Player } from 'video-react';


export default class VideoShow extends React.Component {

  render() {
    return (
      <div className="video-show">
      <Player
        playsInline
        // poster="/assets/poster.png"
          src={this.props.video.url}
      />
      </div>
    );
  }
};
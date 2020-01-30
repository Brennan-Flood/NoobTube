import React from 'react';
import VideoIndexItem from '../videos/video_index_item';
import { Link } from 'react-router-dom';

class AltProfile extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.profileUser);
    this.props.fetchUserVideos(this.props.profileUser);
  
  }

  render() {
    console.log(this.props.profileUser);
    if (this.props.videos.length === 0) {
      return (<div className="user-profile">
        <Link to="/new_video"><button className="add-video-button">Add a Video</button></Link>
        <h1>This user has no videos.</h1>
      </div>)
    } else {
      return (
        <div className="user-profile">
          <Link to="/new_video"><button className="add-video-button">Add a Video</button></Link>
          <h2 className="profile-header">All of this User's Videos</h2>
          <div className="profile-user-videos">
          {this.props.videos.map((video, i) => (
            <VideoIndexItem key={i} video={video} destroyVideo={this.props.destroyVideo} />
          ))}
          </div>
        </div>
      );
    }
  }
}

export default AltProfile;
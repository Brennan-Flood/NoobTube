import React from 'react';
import VideoIndexItem from '../videos/video_index_item';

class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchUserVideos(this.props.currentUser.id);
  }

  render() {
    console.log(this.props)
    if (this.props.videos.length === 0) {
      return (<div>This user has no videos.</div>)
    } else {
      return (
        <div>
          <h2>All of this User's Videos</h2>
          {this.props.videos.map((video, i) => (
            <VideoIndexItem key={i} video={video} destroyVideo={this.props.destroyVideo}/>
          ))}
        </div>
      );
    }
  }
}

export default Profile;
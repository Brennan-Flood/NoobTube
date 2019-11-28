import React from 'react';
// import VideoIndexItem from './video_index_item';

class VideoCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      link: '',
      duration: '',
      author: this.props.currentUser.handle, 
      user: this.props.currentUser.id 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({newVideo: nextProps.newVideo.link});
  // }

  handleSubmit(e) {
    e.preventDefault();
    let video = {
      title: this.state.title,
      link: this.state.link, 
      duration: this.state.duration, 
      author: this.state.author,
      user: this.state.user 
    };

    this.props.createVideo(video);
    this.setState({ link: ''})
    this.setState({ title: ''})
    this.setState({ duration: ''})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="video-create-div"> 
        <form onSubmit={this.handleSubmit}>
          <h1><p className="post-new-video">Post a New Video</p></h1>
          <div>
            <input type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Video Title..."
            />
            <input type="text"
              value={this.state.link}
              onChange={this.update("link")}
              placeholder="Video Link..."
            />
            <input type="text"
              value={this.state.duration}
              onChange={this.update("duration")}
              placeholder="Video duration..."
            />
            <input type="submit" value="Post Video" />
          </div>
        </form>
        <br />
        {/* <VideoIndexItem video={this.state.newVideo} /> */}
      </div>
    )
  }
}

export default VideoCreate; 
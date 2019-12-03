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

  handleSubmit(e) {
    e.preventDefault();
    let video = {
      title: this.state.title,
      link: this.state.link, 
      duration: this.state.duration, 
      author: this.state.author,
      user: this.state.user 
    };

    this.props.createVideo(video)
    .then(() => this.props.history.push(`/videos`))
    this.setState({ link: ''});
    this.setState({ title: ''});
    this.setState({ duration: ''});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="video-create-div"> 
        <form className="video-create-form" onSubmit={this.handleSubmit}>
          <p className="post-new-video">Post a New Video</p>
          
            <input 
              className="video-input"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Video Title..."
            />
            <input 
              className="video-input"
              type="text"
              value={this.state.link}
              onChange={this.update("link")}
              placeholder="Video Link..."
            />
            <input 
              className="video-input"
              type="text"
              value={this.state.duration}
              onChange={this.update("duration")}
              placeholder="Video duration..."
            />
            <input 
            type="submit" 
            value="Post Video" 
            className="video-input"
            />
        </form>
        <br />
      </div>
    )
  }
}

export default VideoCreate; 
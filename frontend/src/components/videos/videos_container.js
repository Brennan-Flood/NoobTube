import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
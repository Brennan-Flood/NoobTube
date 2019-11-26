import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoCreate from './video_create';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user, 
    newVideo: state.entities.videos.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createVideo: data => dispatch(createVideo(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoCreate));

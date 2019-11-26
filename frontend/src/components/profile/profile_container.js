import { connect } from 'react-redux';
import { fetchUserVideos } from '../../actions/video_actions';
import Profile from './profile';


const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserVideos: id => dispatch(fetchUserVideos(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
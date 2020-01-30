import { connect } from 'react-redux';
import { fetchUserVideos, destroyVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import Profile from './profile';


const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.entities.videos.user),
    profileUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserVideos: id => dispatch(fetchUserVideos(id)),
    destroyVideo: id => dispatch(destroyVideo(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
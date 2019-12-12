import { connect } from 'react-redux';
import { fetchUserVideos, destroyVideo } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import AltProfile from './alt_profile';


const mapStateToProps = (state, ownProps) => {
  console.log(state.entities);
  console.log(ownProps.match.params.user_id);
  return {
    videos: Object.values(state.entities.videos.user),
    profileUser: ownProps.match.params.user_id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserVideos: id => dispatch(fetchUserVideos(id)),
    destroyVideo: id => dispatch(destroyVideo(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AltProfile);
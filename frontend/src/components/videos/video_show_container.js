import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideos } from '../../actions/video_actions';
import { fetchLikes, createLike, deleteLike } from '../../actions/like_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    videoId: ownProps.match.params.video_id,
    videos: state.entities.videos.all,
    video: state.entities.videos.all[ownProps.match.params.video_id],
    user: state.session.user
  }
}

const mdp = (dispatch) => ({  
  fetchVideos: () => dispatch(fetchVideos()),
  fetchLikes: videoId => dispatch(fetchLikes(videoId)),
  createLike: videoId => dispatch(createLike(videoId)),
  deleteLike: videoId => dispatch(deleteLike(videoId))
})


export default connect( msp, mdp )(VideoShow);
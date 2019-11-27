import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideos } from '../../actions/video_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    videoId: ownProps.match.params.video_id,
    videos: state.entities.videos.all,
    video: state.entities.videos.all[ownProps.match.params.video_id]
  }
}

const mdp = (dispatch) => ({  
  fetchVideos: () => dispatch(fetchVideos())
})


export default connect( msp, mdp )(VideoShow);
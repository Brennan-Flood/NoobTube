import { connect } from "react-redux";
import VideoShow from "./video_show";
import { fetchVideo } from '../../actions/video_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    videoId: ownProps.match.params.video_id,
    video: state.entities.all
  }
}

const mdp = (dispatch) => ({  
  fetchVideo: id => dispatch(fetchVideo(id))
})


export default connect( msp, mdp )(VideoShow);
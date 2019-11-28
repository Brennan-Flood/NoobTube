import { fetchLikes, createLike, deleteLike } from '../../actions/like_actions';
import { connect } from "react-redux";
import LikesShow from "./likes_show";

const msp = state => {
  return {
    user: state.session.user,
    videos: state.entities.videos.all,
    likes: state.entities.likes.likes,
    dislikes: state.entities.likes.dislikes
  }
}

const dsp = dispatch => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: videoId => dispatch(deleteLike(videoId)),
    fetchLikes: videoId => dispatch(fetchLikes(videoId))
  }
}

export default connect(msp, dsp)(LikesShow);
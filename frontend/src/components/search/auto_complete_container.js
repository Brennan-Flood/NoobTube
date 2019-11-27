import { connect } from "react-redux";
import AutoComplete from "./auto_complete";
import { fetchVideos } from "../../actions/video_actions";

const msp = state => {
  let videoTitles = Object.values(state.entities.videos.all).map(video => {
    return video.title
  })
  return {
    titles: videoTitles,
    videos: Object.values(state.entities.videos.all)
  }
}

const dsp = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(msp, dsp)(AutoComplete);
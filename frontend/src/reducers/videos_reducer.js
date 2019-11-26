import { RECEIVE_NEW_VIDEO, RECEIVE_USER_VIDEOS, RECEIVE_VIDEOS } from "../actions/video_actions";

const videosReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
  case RECEIVE_VIDEOS:
    newState.all = action.videos.data;
    return newState;
  case RECEIVE_USER_VIDEOS:
    newState.user = action.videos.data;
    return newState
  case RECEIVE_NEW_VIDEO:
    newState.new = action.video.data;
    return newState
  default:
    return state
  }
}

export default videosReducer;
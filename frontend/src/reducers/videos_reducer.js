import { RECEIVE_NEW_VIDEO, RECEIVE_USER_VIDEOS, RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
  
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
  case RECEIVE_VIDEOS:
    action.videos.data.forEach((video) => {
      newState.all[video._id] = video
    })
    return newState;
  case RECEIVE_USER_VIDEOS:
    newState.user = action.videos.data;
    return newState;
  case RECEIVE_NEW_VIDEO:
    newState.new = action.video.data;
    return newState;
  case RECEIVE_VIDEO:
    newState.all[action.video.data._id] = action.video.data;
    return newState;
  case REMOVE_VIDEO:
    delete newState.user[action.videoId]
    return newState
  default:
    return state
  }
}

export default videosReducer;
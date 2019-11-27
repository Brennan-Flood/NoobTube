import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
const receiveLike = payload => {
  return {
    type: RECEIVE_LIKE,
    payload
  }
}

export const REMOVE_LIKE = "REMOVE_LIKE";
const removeLike = (payload, videoId) => {
  return {
    type: REMOVE_LIKE,
    payload,
    videoId
  }
}

export const createLike = id => dispatch => (
  LikeApiUtil.createLike(id)
    .then(payload => dispatch((receiveLike(payload))))
)

export const deleteLike = videoId => dispatch => (
  LikeApiUtil.deleteLike(videoId)
    .then(payload => dispatch(removeLike(payload, videoId)))
)
import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
const receiveLike = like => {
  return {
    type: RECEIVE_LIKE,
    like
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

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikes = likes => {
  console.log('receive likes')
  return {
    type: RECEIVE_LIKES,
    likes
  }
}

export const createLike = like => dispatch => (
  LikeApiUtil.createLike(like)
    .then(like => dispatch((receiveLike(like))))
)

export const deleteLike = videoId => dispatch => (
  LikeApiUtil.deleteLike(videoId)
    .then(payload => dispatch(removeLike(payload, videoId)))
)

export const fetchLikes = videoId => dispatch => (
  LikeApiUtil.fetchLikes(videoId)
    .then(likes => dispatch(receiveLikes(likes)))
)
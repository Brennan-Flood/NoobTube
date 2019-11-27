import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

export const fetchComments = (videoId) => (dispatch) => {
  return CommentApiUtil.fetchComments(videoId)
  .then((comments) => dispatch(receiveAllComments(comments)))
}

export const createComment = (comment) => (dispatch) => {
  return CommentApiUtil.createComment(comment)
  .then((comment) => dispatch(receiveComment(comment)))
}
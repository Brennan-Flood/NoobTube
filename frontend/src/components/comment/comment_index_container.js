import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { createComment, fetchComments } from '../../actions/comment_actions'

const msp = (state) => ({
  comments: state.entities.comments
})

const mdp = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (videoId) => dispatch(fetchComments(videoId)),
})

export default connect(msp, mdp)(CommentIndex)
import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState;
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      // return action.comments.data;
      // nextState = {};
      console.log(action.comments);
      return Object.assign({}, action.comments.data)
      // return nextState;
    case RECEIVE_COMMENT:
      console.log(action.comment);
      return Object.assign({}, state, {[action.comment.data._id]: action.comment.data})
    default: 
      return state;
  }
}; 

export default CommentsReducer;
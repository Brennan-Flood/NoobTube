import {RECEIVE_LIKES, RECEIVE_LIKE} from '../actions/like_actions';

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKES:
      let likes = 0;
      let dislikes = 0;
      Object.values(action.likes.data).map((like) => {
        if (like.liked === true) {
          likes += 1
        } else {
          dislikes += 1
        }
      });
      nextState.likes = likes;
      nextState.dislikes = dislikes;
      return nextState;
    case RECEIVE_LIKE:
      if (action.like.data.liked === true ) {
        nextState.likes += 1;
      } else {
        nextState.dislikes += 1;
      }
      return nextState;
    default: 
    return state;
  }

}

export default LikesReducer;
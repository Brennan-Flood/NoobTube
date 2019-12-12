import { combineReducers } from "redux";
import videos from "./videos_reducer";
import comments from './comments_reducer';
import likes from './likes_reducer';
import users from './users_reducer';

const entitiesReducer = combineReducers({
  videos,
  comments,
  likes,
  users
})

export default entitiesReducer;
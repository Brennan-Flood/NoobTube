import { combineReducers } from "redux";
import videos from "./videos_reducer";
import comments from './comments_reducer';
import likes from './likes_reducer';

const entitiesReducer = combineReducers({
  videos,
  comments,
  likes
})

export default entitiesReducer;
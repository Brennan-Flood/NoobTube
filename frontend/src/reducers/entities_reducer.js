import { combineReducers } from "redux";
import videos from "./videos_reducer";
import comments from './comments_reducer';

const entitiesReducer = combineReducers({
  videos,
  comments
})

export default entitiesReducer;
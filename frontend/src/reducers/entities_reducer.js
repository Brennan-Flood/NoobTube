import { combineReducers } from "redux";
import videos from "./videos_reducer"

const entitiesReducer = combineReducers({
  videos
})

export default entitiesReducer;
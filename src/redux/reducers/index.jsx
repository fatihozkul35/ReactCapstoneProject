import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
  loading: loadingReducer,
});

export default rootReducer;

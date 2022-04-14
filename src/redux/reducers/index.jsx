import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
});

export default rootReducer;

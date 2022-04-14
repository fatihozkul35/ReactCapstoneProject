import {
  ADD_BLOG,
  DELETE_BLOG,
  SET_BLOGS,
  UPDATE_BLOG,
} from "../types/blogsTypes";

const initialState = {
  blogs: [],
};
const blogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BLOGS:
      return { blogs: payload };
    // case ADD_BLOG:
    //   return { blogs: payload };
    // case UPDATE_BLOG:
    //   return { blogs: false };
    // case DELETE_BLOG:
    //   return { blogs: false };
    default:
      return state;
  }
};

export default blogsReducer;

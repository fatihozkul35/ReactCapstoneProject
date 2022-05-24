import {
  SET_BLOGS,
} from "../types/blogsTypes";

const initialState = {
  blogs: [],
};
const blogsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BLOGS:
      return { blogs: payload };
    default:
      return state;
  }
};

export default blogsReducer;

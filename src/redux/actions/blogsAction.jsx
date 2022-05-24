import {
  SET_BLOGS,
} from "../types/blogsTypes";

export const setBlogs = (payload) => {
  return { type: SET_BLOGS, payload: payload };
};

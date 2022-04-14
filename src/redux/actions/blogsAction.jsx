import {
  ADD_BLOG,
  DELETE_BLOG,
  SET_BLOGS,
  UPDATE_BLOG,
} from "../types/blogsTypes";

export const setBlogs = (payload) => {
  return { type: SET_BLOGS, payload: payload };
};
// export const addBlog = (payload) => {
//   return { type: ADD_BLOG, payload: payload };
// };
// export const updateBlog = (payload) => {
//   return { type: UPDATE_BLOG, payload: payload };
// };
// export const deleteBlog = (payload) => {
//   return { type: DELETE_BLOG, payload: payload };
// };

import { getDatabase, ref, remove, set, update } from "firebase/database";

//! This function saves a new blog to firebase
export const createBlogToFirebase = (blog) => {
  const id = Date.now();
  const db = getDatabase();
  set(ref(db, "blogs/" + id), { ...blog, id: id });
};

// !! This function updates blogs to firebase
export const updateBlogToFirebase = (blog) => {
  const db = getDatabase();
  const id = blog.id;
  const updateBlog = blog;
  const updates = {};
  updates["/blogs/" + id] = updateBlog;
  return update(ref(db), updates);
};

export const deleteBlog = (id) => {
  const db = getDatabase();
  remove(ref(db, "blogs/" + id));
};

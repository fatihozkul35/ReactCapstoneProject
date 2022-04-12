import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";

//! This function saves a new blog to firebase
export const createBlogToFirebase = (blog) => {
  const db = getDatabase();
  set(ref(db, "blogs/" + blog.id), blog);
};

//! This function fetch blogs from firebase
export const getblogsFromFirebase = (setBlogs) => {
  const db = getDatabase();
  const starCountRef = ref(db, "blogs/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const arrayData = Object.values(data);
      setBlogs([...arrayData]);
    } else {
      setBlogs([]);
    }
    // console.log(arrayData);
  });
};
// !! Update Function
// export const updateBlogToFirebase = (id, blog) => {
//   const db = getDatabase();

//   // A post entry.
//   const updateBlog = blog;

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), "blogs")).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates["/blogs/" + newPostKey] = updateBlog;
//   updates["/blogs/" + id + "/" + blog.id] = updateBlog;

//   return update(ref(db), updates);
// };
